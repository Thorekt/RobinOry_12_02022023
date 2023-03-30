import React from 'react';
import '../../../styles/graphs/customs/AverageSessionsTooltip.css';

function AverageSessionsTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className='average-sessions-custom-tooltip'>
        <p className='label'>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
}

export default AverageSessionsTooltip;
