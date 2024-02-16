import { fetchPersonne } from '@/app/lib/data';
import clsx from 'clsx';
import Image from 'next/image';
import { Personnes } from '@/app/lib/placeholder-data';

export default async function PatientQueue() {
  const personnes = await fetchPersonne();

  return (
    <div className="shadow-lg border-2 border-[#BFDDD9] rounded-xl p-2 w-30 font-sans ml-10">
      <div className="">
        <span className="ml-10 p-10 font-medium text-xl truncate ">Patient Queue</span>
      </div>
      <div className="overflow-y-auto max-h-60 mt-5"> {/* Ici, la hauteur maximale est fixée à 40 */}
        {personnes.map((personne, i) => {
          return (
            <div
              key={personne.id}
              className={clsx('flex flex-row items-center justify-between py-4', {
                'border-t': i !== 0,
              })}
            >
              <div className="flex items-center ml-10">
                <Image
                  src={personne.image_url}
                  alt={`${personne.name}'s profile picture`}
                  className="mr-4 rounded-full"
                  width={32}
                  height={32}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">{personne.name}</p>
                  <p className="hidden text-sm text-gray-500 sm:block">{personne.email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
