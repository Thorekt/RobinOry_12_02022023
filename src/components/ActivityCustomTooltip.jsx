import React from 'react';

import '../styles/ActivityCustomTooltip.css';

function AtivityCustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className='activity-custom-tooltip'>
        <p className='label'>{`${payload[0].value}kg`}</p>
        <p className='label'>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
}

export default AtivityCustomTooltip;
