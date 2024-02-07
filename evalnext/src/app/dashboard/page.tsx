import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Image from 'next/image'

export default function DateNow() {
    const now = new Date();
    const jour = now.toLocaleString('default', { weekday: 'long' });
    const firstLetterCapitallized = jour.charAt(0).toUpperCase()+jour.slice(1);
    const date = now.getDate();

    return (
        <div className=''>
            <div className='grid grid-cols-4 gap-4'>
                <div>
                    <div className='flex mt-10'>
                        <p className="max-w-md font-['Open_Sans'] color-[#0E2A23]">
                              <span style={{ fontSize: '30px'}}>{firstLetterCapitallized}</span>
                             <br />
                            <span className='flex font-serif text-6xl content-center'>{date}</span>
                        </p>
                    </div>
                    {/* mettre le petit message  */}
                 </div>
                 <div >
                    {/* Upcoming */}
                    <div className='bg-[#2CD0CD] w-30 p-2 rounded-full'>
                        <p className='flex pl-10 ml-20'>UpComing Patient <ArrowDownCircleIcon className=" mx-3 w-6 h-6"/></p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 bg-[#334D46] mt-10 w-30">
                        {/* premiere div pour l'image */}
                        <div className='bg-[#FFFFFF] rounded-2xl m-3'>
                            <Image 
                            src="/tete.png"
                            width={500}
                            height={500}
                            alt=''
                            className='rounded-full '
                            />
                        </div>
                        {/* Deuxieme div pour le reste */}
                        <div className='bg-[#F73F3F] ml-0 mr-3 '>
                            <h2 className='font-sans font-medium mt-20 '>Dean Ferrera</h2>
                            <h3 className=" font-sans text-[#94AAA3] ">  Patient since Jan, 2021</h3>
                            <div className='flex'>
                                <span className='font-sans font-medium m-5'>3:00  ->  3:30</span>
                            </div>

                        </div>

                    </div>

                 </div>
                 <div>

                 </div>
            </div>
        </div>
    );
}
