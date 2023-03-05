import React from 'react';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

function ActivityGraph() {
  const data = [
    { day: '2020-07-01', kilogram: 80, calories: 240 },
    { day: '2020-07-02', kilogram: 80, calories: 220 },
    { day: '2020-07-03', kilogram: 81, calories: 280 },
    { day: '2020-07-04', kilogram: 81, calories: 290 },
    { day: '2020-07-05', kilogram: 80, calories: 160 },
    { day: '2020-07-06', kilogram: 78, calories: 162 },
    { day: '2020-07-07', kilogram: 76, calories: 390 },
  ];
  return (
    <ResponsiveContainer width={800} height={200} className='activity-gra'>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis type='number' domain={('1', 'auto')} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey='kilogram'
          fill='#282D30'
          radius={[3, 3, 0, 0]}
          maxBarSize={7}
        />
        <Bar
          dataKey='calories'
          fill='#E60000'
          radius={[3, 3, 0, 0]}
          maxBarSize={7}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ActivityGraph;
