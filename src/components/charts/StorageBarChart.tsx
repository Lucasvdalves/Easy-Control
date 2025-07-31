// src/components/charts/StorageBarChart.tsx
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from '@mui/material/styles';

interface ChartData {
  name: string;
  value: number;
}

interface StorageBarChartProps {
  data: ChartData[];
}

const StorageBarChart: React.FC<StorageBarChartProps> = ({ data }) => {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ResponsiveContainer width="100%" height={370}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{
          top: 25,
          right: 40,
          left: 25,
          bottom: 25,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
        <XAxis 
          type="number" 
          stroke={theme.palette.text.primary}
          style={{ fontSize: '12px' }}
        />
        <YAxis 
          type="category" 
          dataKey="name" 
          stroke={theme.palette.text.primary}
          style={{ fontSize: '12px' }}
          width={110}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '8px',
            padding: '12px',
            boxShadow: theme.shadows[3]
          }}
          itemStyle={{ 
            color: theme.palette.text.primary,
            fontWeight: 'bold'
          }}
          labelStyle={{ 
            color: theme.palette.text.secondary,
            fontWeight: 'bold',
            marginBottom: '4px'
          }}
          formatter={(value: any) => [`${value} unidades`, 'Quantidade']}
        />
        <Legend 
          wrapperStyle={{
            paddingTop: '15px',
            color: theme.palette.text.primary
          }}
        />
        <Bar 
          dataKey="value" 
          name="Quantidade em Estoque" 
          barSize={40}
          radius={[0, 8, 8, 0]}
        >
          {data.map((_, index) => (
            <Cell 
              key={`cell-${index}`}
              fill={theme.palette.primary.light}
              style={{
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StorageBarChart;