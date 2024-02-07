import Link from 'next/link';
import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <div className="flex  bg-[#002F34] h-20 "> 
      <div className="flex  m-auto  "> 
        <NavLinks />
      </div>
      <div className="flex items-center"> 
        <p className="mr-4 text-[#B6D0C4]">Hello</p> 
      </div>
     </div>
  );
}
