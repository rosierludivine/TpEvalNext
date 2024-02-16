import React from 'react';
import Image from 'next/image';

export default async function patientSick(){

    return (
        <div className="bg-[#FFFFFF] shadow-lg rounded-xl  w-30 font-sans ml-10 grid grid-row-2 mr-5">
           <div className="">
            <h3 className="ml-20 pl-3 font-medium text-xl mt-5 "> Patient Sick</h3>
            <br></br>
            </div>
            <div className=' rounded-2xl ml-10  ' >
                            <Image 
                            src='/PatientSick.png'
                            width={150}
                            height={150}
                            alt=''
                            className='mb-5 ml-8'
                            />
                        </div>

        </div>
    )
}