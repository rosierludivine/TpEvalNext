'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


export default function searchBar({ placeholder }: { placeholder: string }){

    const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

  function handleSearch(term: string) {
    
    

    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`); 
  }
  }, 300);

    return (
        <div className="text-3xl mt-20 font-['Open_Sans'] text-center">
            <h3 className=' text-[#95A9A3]'><span className='text-[#283D37]'>To invite</span> someone to your room</h3>
            <h3 className=' text-[#95A9A3]'>share the link below </h3>
        
        <div className=" flex flex-1 flex-shrink-0  mt-5 bg-[#FFFFFF] justify-center">
            
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="pl-20 block w-4/6 h-10 content-center rounded-full py-[9px] text-sm outline-2 placeholder:text-gray-500  bg-[#EBF6F5]"
        placeholder={placeholder} 
        onChange={(e) => {handleSearch(e.target.value);}}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
    </div>
    )
}