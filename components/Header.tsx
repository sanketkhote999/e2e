import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Menu, Search } from 'lucide-react';

export default function Header({ openSidebar }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={openSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            Test Station
          </Button>
        </div>
      </div>
    </header>
  );
}