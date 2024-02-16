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
        <div className=" flex flex-1 flex-shrink-0  bg-[#FFFFFF]">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className=" block w-60 h-10 rounded-full border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ml-20 bg-[#EBF6F5]"
        placeholder={placeholder} 
        onChange={(e) => {handleSearch(e.target.value);}}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
    )
}