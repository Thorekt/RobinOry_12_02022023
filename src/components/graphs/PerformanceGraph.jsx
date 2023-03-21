import { React, useEffect, useState } from 'react';
import '../../styles/PerformanceGraph.css';
import MockApi from '../../utils/MockApi';
import {
  Radar,
  RadarChart,
  Tooltip,
  PolarAngleAxis,
  Legend,
  ResponsiveContainer,
  PolarGrid,
  Label,
} from 'recharts';

function PerformanceGraph({ userId }) {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    if (!performanceData) {
      setPerformanceData(MockApi.getUserPerformanceInformation(userId).data);
    }
  }, [userId, performanceData]);

  if (!performanceData) {
    return <div>Loading...</div>;
  }

  const data = performanceData.data.map((item, index) => {
    item.perfName = performanceData.kind[item.kind];
    return item;
  });
  return (
    <ResponsiveContainer className='average-sessions-graph'>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='perfName' />
        <Tooltip />
        <Legend />
        <Radar type='monotone' dataKey='value' />
        <Label />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default PerformanceGraph;
