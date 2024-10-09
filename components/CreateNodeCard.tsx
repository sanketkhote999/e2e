import { Button } from '@/components/ui/button';
import { Server } from 'lucide-react';

export default function CreateNodeCard() {
  return (
    <div className="bg-card rounded-lg shadow p-4">
      <div className="flex items-center justify-center mb-4">
        <Server className="h-12 w-12 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">Create Node</h3>
      <Button className="w-full">Create</Button>
    </div>
  );
}