import { React, useEffect, useState } from 'react';
import '../../styles/graphs/Performance.css';
import MockApi from '../../utils/MockApi';
import {
  Radar,
  RadarChart,
  Tooltip,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarGrid,
} from 'recharts';

function Performance({ userId }) {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    setPerformanceData(MockApi.getUserPerformanceInformation(userId).data);
  }, [userId, performanceData]);

  if (!performanceData) {
    return <div>Loading...</div>;
  }

  const data = performanceData.data.map((item, index) => {
    item.perfName = performanceData.kind[item.kind];
    return item;
  });
  return (
    <ResponsiveContainer className='performance-graph'>
      <RadarChart outerRadius={90} data={data}>
        <PolarGrid gridType='polygon' radialLines={false} />
        <PolarAngleAxis
          dataKey='perfName'
          tick={{ fill: '#ffffff', fontSize: 15 }}
        />
        <Tooltip />
        <Radar type='monotone' dataKey='value' fill='rgba(255, 1, 1, 0.7)' />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default Performance;
