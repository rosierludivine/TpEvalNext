const { db } = require('@vercel/postgres');
const {
  personnes, 
} = require('../src/app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');



// connexion 
async function main() {
  const client = await db.connect();
  await seedPersonnes(client); 

  await client.end();
}

 //   ------- Table Personnes -----

 async function seedPersonnes (client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
      // Create the "customers" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS personnes (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          image_url VARCHAR(255) NOT NULL, 
          heure VARCHAR(255) 
        );
      `;
  
      console.log(`Created "personnes" table`);
  
      // Insert data into the "customers" table
      const insertedPersonnes = await Promise.all(
        personnes.map(
          (personnes) => client.sql`
          INSERT INTO personnes (id, name, email, image_url)
          VALUES (${personnes.id}, ${personnes.name}, ${personnes.email}, ${personnes.image_url})
          ON CONFLICT (id) DO NOTHING;
        `,
        ),
      );
  
      console.log(`Seeded ${insertedPersonnes.length} personnes`);
  
      return {
        createTable,
        personnes: insertedPersonnes,
      };
    } catch (error) {
      console.error('Error seeding personnes:', error);
      throw error;
    }
  }

  
main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});



