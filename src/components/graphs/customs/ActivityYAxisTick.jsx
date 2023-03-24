import React from 'react';
import PropTypes from 'prop-types';

/*
 * This is the a tick component for the Y axis of the Activity graph.
 *
 * @param {number} x The x position of the tick.
 * @param {number} y The y position of the tick.
 * @param {object} payload The payload of the tick.
 * @returns {JSX.Element} The ActivityYAxisTick component.
 */

function ActivityYAxisTick({ x, y, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={35}
        y={0}
        dy={4}
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

ActivityYAxisTick.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  payload: PropTypes.object.isRequired,
};

export default ActivityYAxisTick;
