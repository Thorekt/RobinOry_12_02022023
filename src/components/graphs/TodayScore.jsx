import { React } from 'react';
import '../../styles/graphs/TodayScore.css';
import {
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';

function TodayScore({ todayScore }) {
  if (!todayScore) {
    return <div>Loading...</div>;
  }
  todayScore = todayScore * 100;
  const data = [{ todayScore: todayScore }];

  return (
    <ResponsiveContainer className='today-score-graph'>
      <RadialBarChart
        cx='50%'
        cy='50%'
        innerRadius='70%'
        outerRadius='80%'
        data={data}
        startAngle={200}
        endAngle={-160}
      >
        <text x='30' y='24' className='title' fill='#20253A' fontWeight={500}>
          Score
        </text>
        <text
          x='50%'
          y='40%'
          className='score'
          textAnchor='middle'
          fill='#282D30'
          fontWeight={700}
        >
          {todayScore}%
        </text>
        <text
          x='50%'
          y='50%'
          className='score'
          textAnchor='middle'
          fill='#74798C'
          fontWeight={700}
        >
          de votre
        </text>
        <text
          x='50%'
          y='60%'
          className='score'
          textAnchor='middle'
          fill='#74798C'
          fontWeight={700}
        >
          objectif
        </text>
        <PolarAngleAxis type='number' domain={[0, 100]} tick={false} />

        <RadialBar dataKey='todayScore' background fill='#E60000' />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default TodayScore;
