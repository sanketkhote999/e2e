import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const transactions = [
  { date: 'Oct 06, 2023 15:53:01', amount: '100.00', status: 'Successful' },
  { date: 'Oct 05, 2023 11:35:15', amount: '250.00', status: 'Pending' },
  { date: 'Oct 04, 2023 09:36:42', amount: '3500.00', status: 'Successful' },
  { date: 'Oct 03, 2023 14:17:00', amount: '7000.00', status: 'Failed' },
  { date: 'Oct 02, 2023 08:10:10', amount: '1000.00', status: 'Successful' },
];

export default function RecentTransactions() {
  return (
    <div className="bg-card rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date & Time</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>$ {transaction.amount}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    transaction.status === 'Successful' ? 'success' : 
                    transaction.status === 'Pending' ? 'warning' : 'destructive'
                  }
                >
                  {transaction.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}