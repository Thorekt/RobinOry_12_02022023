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
        <CartesianGrid />
        <XAxis dataKey={'dayLetter'} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='sessionLength' />
        <Label />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AverageSessions;
