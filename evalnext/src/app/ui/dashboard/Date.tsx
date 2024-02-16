
import React from 'react';

export default function NowDate(){

    // Creation de la date du jour avec la premiere lettre en majuscule 
    // Recuperation de la date du jour 
    const now = new Date(); 
    // Avoir le jour 
    const jour = now.toLocaleString('default', { weekday: 'long' });
    // Mettre la premiere lettre en majuscule et le reste en minuscules 
    const firstLetterCapitallized = jour.charAt(0).toUpperCase()+jour.slice(1);
    const date = now.getDate();

    return (
        <div className=''>
                    {/* Div ou il y aura la date du jour */}
                    <div className='flex mt-10 ml-10 text-black'>
                        <p className="max-w-md font-['Open_Sans'] color-[#0E2A23]">
                              <span style={{ fontSize: '50px', color: 'black'}}>{firstLetterCapitallized}</span>
                             <br />
                            <span className='flex font-serif text-8xl content-center text-black' style={{ fontSize: '30px', color: 'black'}}>{date}</span>
                        </p>
                    </div>
                    {/* mettre le petit message  */}
                 </div>
    )
}