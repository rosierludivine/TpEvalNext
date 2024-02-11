import { sql } from '@vercel/postgres';

import {Personnes }from './definitions';

export async function fetchPersonne() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
  
  
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      
      console.log('Fetching revenue data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<Personnes>`SELECT * FROM personnes`;
  
      console.log('Data fetch completed after 3 seconds.');
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }

function noStore() {
    throw new Error('Function not implemented.');
}
