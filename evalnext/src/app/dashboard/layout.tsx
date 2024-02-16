import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-screen">
        <SideNav />
      <div className="flex-grow  md:overflow-y-auto  bg-[#EBF6F5]"  style={{ color: 'black'}}>{children}</div>
    </div>
  );
}