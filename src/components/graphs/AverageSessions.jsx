import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/graphs/AverageSessions.css';
import ApiHandler from '../../utils/ApiHandler';
import { Navigate } from 'react-router-dom';

import {
  Line,
  LineChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Label,
} from 'recharts';

const DAY_LIST = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

/*
 * the AverageSessions graph
 *
 * @param {number} userId The id of the user.
 * @returns {JSX.Element} The AverageSessions component.
 */

function AverageSessions({ userId }) {
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    ApiHandler.getUserAverageSessionsInformation(userId)
      .then((res) => setAverageSessionsData(res.data))
      .catch((err) => setError(err));
  }, [userId, averageSessionsData, error]);

  if (error !== null) {
    console.log(error);
    return (
      <React.Fragment>
        <Navigate to='/error' replace={true} />
      </React.Fragment>
    );
  }

  if (!averageSessionsData) {
    return <div>Loading...</div>;
  }

  // Bind the day number to the day letter
  const sessionsData = averageSessionsData.sessions.map((item, index) => {
    item.dayLetter = DAY_LIST[item.day - 1];
    return item;
  });

  return (
    <ResponsiveContainer className='average-sessions-graph'>
      <LineChart
        data={sessionsData}
        margin={{
          top: 80,
          right: 0,
          left: 0,
          bottom: 20,
        }}
      >
        <defs>
          <linearGradient id='gradient'>
            <stop offset='20%' stopColor='#ffffff' stopOpacity={0.3} />
            <stop offset='100%' stopColor='#ffffff' stopOpacity={1} />
          </linearGradient>
        </defs>
        <text x='34' y='29' className='title' fill='#FFFFFF'>
          Durée moyenne des
        </text>
        <text x='34' y='49' className='title' fill='#FFFFFF'>
          sessions
        </text>
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey={'dayLetter'}
          tickLine={false}
          axisLine={false}
          tickMargin={20}
          padding={{ left: 10, right: 10 }}
          tick={{ fill: '#FFFFFF', opacity: '0.5' }}
        />
        <Tooltip />
        <Line
          type='natural'
          dataKey='sessionLength'
          stroke='url(#gradient)'
          strokeWidth={2}
          dot={false}
          transform='scale(1.15,1), translate(-15, 0)'
        />
        <Label />
      </LineChart>
    </ResponsiveContainer>
  );
}

AverageSessions.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default AverageSessions;
