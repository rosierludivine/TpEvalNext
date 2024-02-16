// Import pour le bon fonctionnement du site 
import React from 'react';
import Image from 'next/image';
import Date from '../ui/dashboard/Date';
import RdvPatient from '../ui/dashboard/rdvPatient';
import SearchBar from '../ui/dashboard/searchBar';
import PatientSick from '../ui/dashboard/patientSick';
import PatientQueue from '../ui/dashboard/patientQueue';
import {Personnes} from '../lib/placeholder-data';

export default function Page() {

    return (
        <div className=''>
            <div className='grid grid-rows-2 '>
                <div className=' pt-4 pb-6' >
                    <div className='grid grid-cols-4 gap-4  '>
                <div className=''>
                    <Date />
                 </div>
                 {/* ouverture du troisieme colonne  */}
                 <div >
                    <RdvPatient />
                 </div>
                 {/* fermeture de la deuxieme colonne */}
                 {/* Ouverture de la troisieme colonne  */}
                 <div>
                    <PatientQueue />
                 </div>
                 {/* Fermeture de la troisieme colonne  */}
                 {/* Ouverture de la quatrieme colonne  */}
                 <div>
                    <PatientSick />

                 </div>
                 {/* Fermeture de la quatrieme colonne */}

                    </div>
                </div>
                <div className='w-screen h-30 items-center  bg-[#FFFFFF]'>

                    <SearchBar placeholder="Search peoples..."  />
                </div>
            </div>

            
        </div>
        
    );
}
