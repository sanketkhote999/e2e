import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const loginHistory = [
  { date: 'Oct 06, 2023 03:41 PM', user: 'john.doe@example.com', ip: '192.168.1.1' },
  { date: 'Oct 06, 2023 11:41 AM', user: 'john.doe@example.com', ip: '192.168.1.1' },
  { date: 'Oct 03, 2023 11:30 AM', user: 'john.doe@example.com', ip: '192.168.1.2' },
  { date: 'Sep 26, 2023 12:54 PM', user: 'jane.smith@example.com', ip: '192.168.1.3' },
  { date: 'Sep 26, 2023 12:52 PM', user: 'jane.smith@example.com', ip: '192.168.1.3' },
];

export default function LoginHistory() {
  return (
    <div className="bg-card rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Login History</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date & Time</TableHead>
            <TableHead>User</TableHead>
            <TableHead>IP Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loginHistory.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.user}</TableCell>
              <TableCell>{entry.ip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}