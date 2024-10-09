import { ScrollArea } from '@/components/ui/scroll-area';

const activities = [
  { date: 'Oct 10, 2023', action: 'Created a new node', details: 'Node ID: ABC123' },
  { date: 'Oct 09, 2023', action: 'Updated security settings', details: 'Enabled two-factor authentication' },
  { date: 'Oct 08, 2023', action: 'Deployed a new application', details: 'App name: MyWebApp' },
  { date: 'Oct 07, 2023', action: 'Created a new bucket', details: 'Bucket name: my-data-bucket' },
  { date: 'Oct 06, 2023', action: 'Added a new team member', details: 'User: john@example.com' },
];

export default function ActivityTimeline() {
  return (
    <div className="bg-card rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Activity Timeline</h3>
      <ScrollArea className="h-[300px]">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="border-l-2 border-primary pl-4 pb-4">
              <p className="text-sm text-muted-foreground">{activity.date}</p>
              <p className="font-medium">{activity.action}</p>
              <p className="text-sm">{activity.details}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}