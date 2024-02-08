import {postgresConnectionString, sql} from '@vercel/postgres'
import Image from "next/image";
import {
    PersonnesTableType,
    FormattedPersonnesTable,
  } from '@/app/lib/definitions';
  

export default function PatientQueue ({
    personnes,
  }: {
    personnes: FormattedPersonnesTable[];
  }){

    if (!personnes) {
        return (
        <div className=" text-balances border-2 border-[#BFDDD9] rounded-xl  w-30 font-sans">
            <span className='  font-medium text-xl row-auto p-20 ml-10'>Patient Queue </span>
            <span className='divide-[#243c5a]'></span>
            <h3  className='text-wrap mt-2 ml-10 '>Vous n'avez pas de rendez-vous aujourd'hui</h3>
        </div>)
      }

    return(
        // Nombre de ligne automatique 
        < div className=' shadow-lg row-auto border-2 border-[#BFDDD9] rounded-xl p_2 w-30 font-sans'> 
        {/*  */}
            <div className=" ">
                <span className='ml-20 p-20 font-medium text-xl'>Patient Queue </span>
            </div>
            <div className=' ml-10 p_2 w-30 font-sans'> 
                hello 
                <div className='grid-cols-2'> 
                    <div>
                        
                    </div>
                    <div>
                    {/* metter l'image  */}
                    <p className=''></p>
                    </div>

                </div>
            </div>

            
        </div> 
    )
}