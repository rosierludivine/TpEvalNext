import React from 'react';
import Image from 'next/image';
// Import des images 
import { ArrowDownCircleIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function rdvPatient(){
    return(
        <div>
        {/* Upcoming */}
        <div className='bg-[#2CD0CD] w-30 p-2 rounded-full '>
        <p className='flex pl-10 ml-10'>UpComing Patient <ArrowDownCircleIcon className=" mx-3 w-6 h-6"/></p>
    </div>
    {/* Creation de 2 colonnes */}
    <div className="grid grid-cols-2 gap-2  mt-10 w-30 bg-[#FFFFFF] rounded-2xl">
        {/* premiere div pour l'image */}
        <div className=' rounded-2xl m-3 ml-10 mt-7' >
            <Image 
            src='/personnes/bebe.png'
            width={100}
            height={100}
            alt=''
            className='rounded-full  '
            />
        </div>
        {/* Deuxieme div pour le reste */}
        <div className=' ml-0 mr-3 pb-4'>
            
            <h2 className='font-sans font-medium mt-5 ' style={{ color: 'black'}} >Dean Ferrera </h2>
            <h3 className=" font-sans text-[#94AAA3] ">  Patient since Jan, 2021</h3>
            <div className='flex '>
                <p className='bg-[#EBF6F5] font-sans font-medium mt-3 pl-2 pr-2 rounded-3xl  text-sm ' style={{ color: 'black'}} >3:00  </p >
                    <span className=' mt-2  ml-2 mr-2 '>
                        <ArrowLongRightIcon className=" mt-1 flex h-5 w-7  text-gray-500 bg-[#2CD0CD] rounded-xl" style={{ color: 'black'}}/> 
                     </span >
                <p className=' bg-[#EBF6F5] font-sans font-medium mt-3 text-sm  pl-2 pr-2 rounded-3xl ' style={{ color: 'black'}}>3:30</p>
            </div>

        </div>

    </div>
    </div>
    )
}