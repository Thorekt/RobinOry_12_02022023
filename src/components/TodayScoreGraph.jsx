import { React, useEffect, useState } from 'react';
import '../styles/TodayScoreGraph.css';
import {
  RadialBar,
  RadialBarChart,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';

function TodayScoreGraph({ todayScore }) {
  if (!todayScore) {
    return <div>Loading...</div>;
  }

  const data = [{ todayScore: todayScore }];

  return (
    <ResponsiveContainer className='average-sessions-graph'>
      <RadialBarChart
        innerRadius='30%'
        outerRadius='80%'
        data={data}
        startAngle={180}
        endAngle={0}
        barSize={100}
      >
        <Tooltip />
        <Legend />
        <RadialBar dataKey='todayScore' />
        <Label />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default TodayScoreGraph;
