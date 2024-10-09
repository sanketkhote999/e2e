import { Button } from '@/components/ui/button';
import { Database, Server, Network, HardDrive, Cloud } from 'lucide-react';

const icons = {
  Database,
  Server,
  Network,
  HardDrive,
  Cloud,
};

export default function ServiceCard({ title, icon }) {
  const Icon = icons[icon];

  return (
    <div className="bg-card rounded-lg shadow p-4">
      <div className="flex items-center justify-center mb-4">
        <Icon className="h-12 w-12 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <Button className="w-full" variant="outline">Create</Button>
    </div>
  );
}