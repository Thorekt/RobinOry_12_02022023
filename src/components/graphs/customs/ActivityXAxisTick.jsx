import React from 'react';
import PropTypes from 'prop-types';

function ActivityXAxisTick({ x, y, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor='end'
        fill='#9B9EAC'
        fontSize={14}
        fontWeight={500}
      >
        {payload.value}
      </text>
    </g>
  );
}

ActivityXAxisTick.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  payload: PropTypes.object.isRequired,
};

export default ActivityXAxisTick;
