import { React, useEffect, useState } from 'react';
import '../../styles/graphs/AverageSessions.css';
import MockApi from '../../utils/MockApi';
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Label,
} from 'recharts';

const DAY_LIST = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function AverageSessions({ userId }) {
  const [averageSessionsData, setAverageSessionsData] = useState(null);

  useEffect(() => {
    setAverageSessionsData(
      MockApi.getUserAverageSessionsInformation(userId).data
    );
  }, [userId, averageSessionsData]);

  if (!averageSessionsData) {
    return <div>Loading...</div>;
  }

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
        <XAxis dataKey={'dayLetter'} tickLine={false} axisLine={false} />
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

export default AverageSessions;