// Import des images 
import { ArrowDownCircleIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
// Import pour le bon fonctionnement du site 
import React from 'react';
import Image from 'next/image';
import PatientQueue from '../ui/dashboard/patientQueue';
import {Personnes} from '../lib/placeholder-data';

export default function DateNow() {
    // Creation de la date du jour avec la premiere lettre en majuscule 
    // Recuperation de la date du jour 
    const now = new Date(); 
    // Avoir le jour 
    const jour = now.toLocaleString('default', { weekday: 'long' });
    // Mettre la premiere lettre en majuscule et le reste en minuscules 
    const firstLetterCapitallized = jour.charAt(0).toUpperCase()+jour.slice(1);
    const date = now.getDate();

    return (
        <div className=' p-0 m-0 ' >
            <div className='grid grid-cols-4 gap-4 '>
                <div className=''>
                    {/* Div ou il y aura la date du jour */}
                    <div className='flex mt-10'>
                        <p className="max-w-md font-['Open_Sans'] color-[#0E2A23]">
                              <span style={{ fontSize: '30px'}}>{firstLetterCapitallized}</span>
                             <br />
                            <span className='flex font-serif text-6xl content-center'>{date}</span>
                        </p>
                    </div>
                    {/* mettre le petit message  */}
                 </div>
                 {/* ouverture du troisieme colonne  */}
                 <div >
                    {/* Upcoming */}
                    <div className='bg-[#2CD0CD] w-30 p-2 rounded-full'>
                        <p className='flex pl-10 ml-20'>UpComing Patient <ArrowDownCircleIcon className=" mx-3 w-6 h-6"/></p>
                    </div>
                    {/* Creation de 2 colonnes */}
                    <div className="grid grid-cols-2 gap-2  mt-10 w-30 ">
                        {/* premiere div pour l'image */}
                        <div className=' rounded-2xl m-3'>
                            <Image 
                            src='/tete.png'
                            width={500}
                            height={500}
                            alt=''
                            className='rounded-full '
                            />
                        </div>
                        {/* Deuxieme div pour le reste */}
                        <div className=' ml-0 mr-3'>
                            
                            <h2 className='font-sans font-medium mt-20' >Dean Ferrera </h2>
                            <h3 className=" font-sans text-[#94AAA3] ">  Patient since Jan, 2021</h3>
                            <div className='flex'>
                                <p className='font-sans font-medium mt-2 w-10 flex' >3:00  </p >
                                <ArrowLongRightIcon className=" flex h6 w-6 mt-2 text-gray-500" /> 
                                <p className='font-sans font-medium mt-2 w-10 flex'>3:30</p>
                            </div>

                        </div>

                    </div>
                 </div>
                 {/* fermeture de la deuxieme colonne */}
                 {/* Ouverture de la troisieme colonne  */}
                 <div>
                    <PatientQueue />
                 </div>
                 {/* Fermeture de la troisieme colonne  */}
                 {/* Ouverture de la quatrieme colonne  */}
                 <div>

                 </div>
                 {/* Fermeture de la quatrieme colonne */}

            </div>
            hello 
        </div>
    );
}
