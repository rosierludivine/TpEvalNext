'use client'; 
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ChartBarIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Personnes',
    href: '/dashboard/personnes',
    icon: UsersIcon,
  },
  { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link ) => {
        const LinkIcon = link.icon ;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              ' w-30  items-center justify-start gap-2 rounded-md m-2 p-3 text-sm text-[#B6D0C4]  bg-[#0F474F] hover:text-[#166D7B]  flex',
            {
                'bg-sky-100  ': pathname === link.href,
              },
            )}

          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block ">{link.name}</p>

            
          </Link>
        );
      })}
    </>
  );
}
