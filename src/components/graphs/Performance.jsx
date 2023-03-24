import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/graphs/Performance.css';
import ApiHandler from '../../utils/ApiHandler';
import { Navigate } from 'react-router-dom';

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
  const [error, setError] = useState(null);

  useEffect(() => {
    ApiHandler.getUserPerformanceInformation(userId)
      .then((res) => setPerformanceData(res.data))
      .catch((err) => setError(err));
  }, [userId, performanceData, error]);

  if (error !== null) {
    console.log(error);
    return (
      <React.Fragment>
        <Navigate to='/error' replace={true} />
      </React.Fragment>
    );
  }

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
