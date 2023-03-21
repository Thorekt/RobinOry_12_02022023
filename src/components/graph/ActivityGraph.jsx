import { React, useEffect, useState } from 'react';
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
import AtivityCustomTooltip from './custom/ActivityCustomTooltip';

import MockApi from '../../utils/MockApi';

function ActivityGraph({ userId }) {
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    setActivityData(MockApi.getUserActivityInformation(userId).data);
  });

  if (!activityData) {
    return <div>Loading...</div>;
  }

  const sessionsData = activityData.sessions.map((item, index) => {
    item.key = index + 1;
    return item;
  });
  return (
    <ResponsiveContainer className='activity-graph'>
      <BarChart
        barSize={7} //epaisseur de la barre
        barGap={8} //espace entre chaque barre
        data={sessionsData}
        margin={{
          top: 113,
          right: 0,
          left: 43,
          bottom: 0,
        }}
      >
        <text x='24' y='32' className='title'>
          Activité quotidienne
        </text>
        <CartesianGrid vertical={false} strokeDasharray='4' />
        <XAxis dataKey={'key'} tickLine={false} scale='point' />
        <YAxis
          yAxisId={'kilogramAxis'}
          dataKey={'kilogram'}
          domain={[69, 'dataMax + 2']}
          orientation='right'
          tickLine={false}
          axisLine={false}
          tickCount={3}
          tick={{ fontSize: 14, fontWeight: 500, color: '#9B9EAC' }}
        />
        <YAxis
          yAxisId={'caloriesAxis'}
          dataKey={'calories'}
          domain={[0, 'dataMax + 10']}
          hide={true}
          allowDataOverflow={false}
          height='100%'
        />
        <Tooltip
          coordinate={{ x: 100, y: 100 }}
          content={<AtivityCustomTooltip />}
        />
        <Legend
          x='24'
          verticalAlign='top'
          align='right'
          iconType='circle'
          iconSize={8}
        />

        <Bar
          yAxisId={'kilogramAxis'}
          name='Poids (kg)'
          dataKey='kilogram'
          fill='#282D30'
          radius={[3, 3, 0, 0]}
          maxBarSize={7}
        />
        <Bar
          yAxisId={'caloriesAxis'}
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
