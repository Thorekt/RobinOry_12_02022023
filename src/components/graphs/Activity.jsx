import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
import ActivityYAxisTick from './customs/ActivityYAxisTick';
import ActivityLegend from './customs/ActivityLegend';

import ApiHandler from '../../utils/ApiHandler';
import { Navigate } from 'react-router-dom';

/*
 * the Activity graph
 *
 * @param {number} userId The user id.
 * @returns {JSX.Element} The Activity component.
 */

function Activity({ userId }) {
  const [activityData, setActivityData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    ApiHandler.getUserActivityInformation(userId)
      .then((res) => setActivityData(res.data))
      .catch((err) => setError(err));
  }, [userId, activityData, error]);

  if (error !== null) {
    console.log(error);
    return (
      <React.Fragment>
        <Navigate to='/error' replace={true} />
      </React.Fragment>
    );
  }

  if (!activityData) {
    return <div>Loading...</div>;
  }

  // add a key to each session, the key is the index + 1
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
          top: 80,
          right: 0,
          left: 43,
          bottom: 0,
        }}
      >
        <text x='32' y='24' className='title'>
          Activité quotidienne
        </text>
        <CartesianGrid vertical={false} strokeDasharray='4' />
        <XAxis
          dataKey={'key'}
          tickLine={false}
          scale='point'
          tick={<ActivityXAxisTick />}
          padding={{ left: 10, right: 10 }}
          stroke='#DEDEDE'
        />
        <YAxis
          yAxisId={'kilogramAxis'}
          dataKey={'kilogram'}
          domain={['dataMin - 3', 'dataMax + 2']}
          orientation='right'
          tickLine={false}
          axisLine={false}
          tickCount={3}
          tick={<ActivityYAxisTick />}
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
          verticalAlign='top'
          align='right'
          iconType='circle'
          iconSize={8}
          width={400}
          wrapperStyle={{ top: 10, right: -25 }}
          formatter={ActivityLegend}
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

Activity.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Activity;
