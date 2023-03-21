import { React, useEffect, useState } from 'react';
import '../../styles/graphs/TodayScore.css';
import {
  RadialBar,
  RadialBarChart,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  PolarAngleAxis,
} from 'recharts';

function TodayScore({ todayScore }) {
  if (!todayScore) {
    return <div>Loading...</div>;
  }

  const data = [{ todayScore: todayScore * 100 }];

  return (
    <ResponsiveContainer className='average-sessions-graph'>
      <RadialBarChart
        cx='50%'
        cy='50%'
        innerRadius='90%'
        outerRadius='100%'
        data={data}
        startAngle={200}
        endAngle={-20}
      >
        <PolarAngleAxis type='number' domain={[0, 100]} tick={false} />
        <Tooltip />
        <Legend />
        <RadialBar dataKey='todayScore' background fill='#E60000' />
        <Label />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default TodayScore;
