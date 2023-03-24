import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/graphs/AverageSessions.css';
import ApiHandler from '../../utils/ApiHandler';
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

  useEffect(() => {
    ApiHandler.getUserAverageSessionsInformation(userId)
      .then((res) => setAverageSessionsData(res.data))
      .catch((err) => console.log(err));
  }, [userId, averageSessionsData]);

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
      <LineChart data={sessionsData}>
        <text x='34' y='29' className='title' fill='#FFFFFF'>
          Durée moyenne des sessions
        </text>
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey={'dayLetter'}
          tickLine={false}
          axisLine={false}
          padding={{ left: 10, right: 10 }}
        />
        <Tooltip />
        <Line
          type='natural'
          dataKey='sessionLength'
          stroke='#ffffff'
          strokeWidth={2}
          dot={false}
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
