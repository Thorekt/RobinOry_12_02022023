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
  Label,
} from 'recharts';

import '../styles/ActivityGraph.css';
import AtivityCustomTooltip from './ActivityCustomTooltip';

function ActivityGraph() {
  let data = [
    { day: '2020-07-01', kilogram: 80, calories: 240 },
    { day: '2020-07-02', kilogram: 80, calories: 220 },
    { day: '2020-07-03', kilogram: 81, calories: 280 },
    { day: '2020-07-04', kilogram: 81, calories: 290 },
    { day: '2020-07-05', kilogram: 80, calories: 160 },
    { day: '2020-07-06', kilogram: 78, calories: 162 },
    { day: '2020-07-07', kilogram: 76, calories: 390 },
  ];

  data = data.map((item, index) => {
    item.key = index + 1;
    return item;
  });
  return (
    <ResponsiveContainer height={200} className='activity-graph'>
      <BarChart data={data} height={150}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={'key'} />
        <YAxis dataKey={'kilogram'} domain={[69, 'auto']} orientation='right' />
        <YAxis dataKey={'calories'} />
        <Tooltip content={<AtivityCustomTooltip />} />
        <Legend verticalAlign='top' align='right' iconType='circle' />
        <Label
          position={'insideTopLeft'}
          value='Activité quotidienne'
          offset={0}
        />
        <Bar
          name='Poids (kg)'
          dataKey='kilogram'
          fill='#282D30'
          radius={[3, 3, 0, 0]}
          maxBarSize={7}
        />
        <Bar
          name='Calories brûlées (kCal)'
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
