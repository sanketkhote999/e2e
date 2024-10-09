import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Server,
  HardDrive,
  Database,
  Network,
  FileText,
  CreditCard,
  Settings,
  Terminal,
  FileCode,
  ShieldCheck,
} from 'lucide-react';

const sidebarItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Compute', icon: Server, href: '/compute' },
  { name: 'Storage', icon: HardDrive, href: '/storage' },
  { name: 'Database', icon: Database, href: '/database' },
  { name: 'Network', icon: Network, href: '/network' },
  { name: 'Licenses', icon: FileText, href: '/licenses' },
  { name: 'Billing', icon: CreditCard, href: '/billing' },
  { name: 'Settings', icon: Settings, href: '/settings' },
  { name: 'API', icon: Terminal, href: '/api' },
  { name: 'Docs', icon: FileCode, href: '/docs' },
  { name: 'Compliances', icon: ShieldCheck, href: '/compliances' },
];

export default function Sidebar({ open, setOpen }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sidebarContent = (
    <>
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Server className="h-6 w-6" />
          <span className="font-bold">E2E Cloud</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className="w-full justify-start"
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </>
  );

  if (isMobile) {
    return (
      <>
        <div
          className={cn(
            'fixed inset-0 z-40 flex',
            open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        <div
          className={cn(
            'fixed inset-y-0 left-0 z-50 flex w-72 flex-col',
            open ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          {sidebarContent}
        </div>
      </>
    );
  }

  return (
    <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
      {sidebarContent}
    </div>
  );
}