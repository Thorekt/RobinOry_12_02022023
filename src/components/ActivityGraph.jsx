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
import AtivityCustomTooltip from './ActivityCustomTooltip';

import MockApi from '../utils/MockApi';

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
    <ResponsiveContainer width='100%' className='activity-graph'>
      <BarChart width='100%' data={sessionsData} barGap={-90}>
        <Label position={'insideTopLeft'} content='Activité quotidienne' />
        <CartesianGrid vertical={false} strokeDasharray='4' />
        <XAxis dataKey={'key'} tickLine={false} />
        <YAxis
          yAxisId={'kilogramAxis'}
          dataKey={'kilogram'}
          domain={[69, 'dataMax + 2']}
          orientation='right'
          tickLine={false}
          axisLine={false}
          tickCount={3}
        />
        <YAxis
          yAxisId={'caloriesAxis'}
          dataKey={'calories'}
          domain={[0, 'dataMax + 10']}
          axisLine={false}
          tickLine={false}
          tick={false}
          allowDataOverflow={false}
          height='100%'
        />
        <Tooltip
          coordinate={{ x: 100, y: 100 }}
          content={<AtivityCustomTooltip />}
        />
        <Legend verticalAlign='top' align='right' iconType='circle' />

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
