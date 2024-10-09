import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const alerts = [
  { date: 'Oct 06, 2023 6:11 PM', name: 'High CPU Usage on Server A', level: 'Critical' },
  { date: 'Oct 05, 2023 1:53 PM', name: 'Low Disk Space on Database Server', level: 'Warning' },
  { date: 'Oct 04, 2023 12:18 PM', name: 'Network Latency Spike', level: 'Critical' },
  { date: 'Oct 03, 2023 07:06 PM', name: 'Memory Usage Exceeded Threshold', level: 'Warning' },
  { date: 'Oct 02, 2023 06:49 PM', name: 'API Response Time Degradation', level: 'Critical' },
];

export default function MonitoringAlerts() {
  return (
    <div className="bg-card rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Monitoring Alerts</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date & Time</TableHead>
            <TableHead>Alert Name</TableHead>
            <TableHead>Severity Level</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alerts.map((alert, index) => (
            <TableRow key={index}>
              <TableCell>{alert.date}</TableCell>
              <TableCell>{alert.name}</TableCell>
              <TableCell>
                <Badge variant={alert.level === 'Critical' ? 'destructive' : 'warning'}>{alert.level}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}