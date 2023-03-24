import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/graphs/customs/ActivityTooltip.css';

function ActivityTooltip({ active, payload, label }) {
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

ActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

export default ActivityTooltip;
