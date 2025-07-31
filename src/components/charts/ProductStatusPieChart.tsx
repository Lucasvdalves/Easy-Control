// src/components/charts/ProductStatusPieChart.tsx
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

interface ChartData {
  name: string;
  value: number;
}

interface ProductStatusPieChartProps {
  data: ChartData[];
}

const COLORS = ['#FF4560', '#FFC107', '#4CAF50']; // Vermelho (Vencido), Amarelo (Próximo), Verde (Ok)

const ProductStatusPieChart: React.FC<ProductStatusPieChartProps> = ({ data }) => {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Calcular total para porcentagens
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Dados com porcentagens calculadas
  const dataWithPercent = data.map(item => ({
    ...item,
    percent: (item.value / total) * 100
  }));

  // Custom label que mostra apenas quando hovering
  const renderCustomLabel = (entry: any) => {
    if (hoveredIndex !== null) {
      const hoveredData = dataWithPercent[hoveredIndex];
      if (entry.name === hoveredData.name) {
        return `${entry.name}: ${entry.value} (${hoveredData.percent.toFixed(0)}%)`;
      }
    }
    return `${entry.name}: ${entry.percent.toFixed(0)}%`;
  };

  return (
    <Box sx={{ position: 'relative', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dataWithPercent}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={hoveredIndex !== null ? 85 : 80} // Efeito de "crescimento" global
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={renderCustomLabel}
          >
            {dataWithPercent.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                stroke={hoveredIndex === index ? theme.palette.common.white : 'none'}
                strokeWidth={hoveredIndex === index ? 2 : 0}
                style={{ 
                  filter: hoveredIndex === index ? 'brightness(1.1)' : 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: '4px',
              padding: '12px',
              boxShadow: theme.shadows[3]
            }}
            itemStyle={{ color: theme.palette.text.primary }}
            labelStyle={{ color: theme.palette.text.secondary, fontWeight: 'bold' }}
            formatter={(value: any, name: any, props: any) => [
              `${value} produtos (${props.payload.percent.toFixed(1)}%)`, 
              name
            ]}
          />
          <Legend 
            wrapperStyle={{ 
              paddingTop: '20px',
              fontSize: '14px'
            }}
            formatter={(value, entry: any) => (
              <span style={{ color: theme.palette.text.primary }}>
                {value}: {entry.payload.value} produtos
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Informação adicional quando hovering */}
      {hoveredIndex !== null && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: theme.palette.background.paper,
            border: `2px solid ${COLORS[hoveredIndex]}`,
            borderRadius: 2,
            padding: 2,
            boxShadow: theme.shadows[4],
            zIndex: 1000,
            textAlign: 'center',
            minWidth: 120,
            pointerEvents: 'none'
          }}
        >
          <Box sx={{ color: COLORS[hoveredIndex], fontWeight: 'bold', fontSize: '0.9rem' }}>
            {dataWithPercent[hoveredIndex].name}
          </Box>
          <Box sx={{ color: theme.palette.text.primary, fontSize: '1.2rem', fontWeight: 'bold' }}>
            {dataWithPercent[hoveredIndex].value}
          </Box>
          <Box sx={{ color: theme.palette.text.secondary, fontSize: '0.8rem' }}>
            {dataWithPercent[hoveredIndex].percent.toFixed(1)}%
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductStatusPieChart;
