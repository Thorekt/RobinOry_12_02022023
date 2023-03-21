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
} from 'recharts';

import '../../styles/graphs/Activity.css';
import ActivityTooltip from './customs/ActivityTooltip';
import ActivityXAxisTick from './customs/ActivityXAxisTick';

import MockApi from '../../utils/MockApi';

function Activity({ userId }) {
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
        <XAxis
          dataKey={'key'}
          tickLine={false}
          scale='point'
          tick={<ActivityXAxisTick />}
        />
        <YAxis
          yAxisId={'kilogramAxis'}
          dataKey={'kilogram'}
          domain={['dataMin - 3', 'dataMax + 2']}
          orientation='right'
          tickLine={false}
          axisLine={false}
          tickCount={3}
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
          content={<ActivityTooltip />}
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

export default Activity;
