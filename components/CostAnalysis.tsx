"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { useTheme } from 'next-themes';

const data = [
  { name: 'Jan', total: 4000 },
  { name: 'Feb', total: 6000 },
  { name: 'Mar', total: 5000 },
  { name: 'Apr', total: 7000 },
  { name: 'May', total: 6500 },
  { name: 'Jun', total: 8000 },
  { name: 'Jul', total: 1000 },
];

export default function CostAnalysis() {
  const { theme } = useTheme();

  const getBarColor = () => {
    return theme === 'dark' ? 'hsl(var(--primary))' : 'hsl(var(--primary))';
  };

  return (
    <div className="bg-card rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Cost Analysis</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))', 
              borderColor: 'hsl(var(--border))',
              color: 'hsl(var(--foreground))'
            }}
          />
          <Bar dataKey="total" fill={getBarColor()} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-muted-foreground mt-2 text-center">
        Note: This cost analysis graph depicts the usage of All Services in last 6 months
      </p>
    </div>
  );
}