import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/graphs/Performance.css';
import ApiHandler from '../../utils/ApiHandler';
import {
  Radar,
  RadarChart,
  Tooltip,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarGrid,
} from 'recharts';

/*
 * This is the performance graph.
 *
 * @param {number} userId The id of the user.
 * @returns {JSX.Element} The Performance component.
 */

function Performance({ userId }) {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    setPerformanceData(ApiHandler.getUserPerformanceInformation(userId).data);
  }, [userId, performanceData]);

  if (!performanceData) {
    return <div>Loading...</div>;
  }

  // Bind the data kind to the kind name
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

Performance.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Performance;
