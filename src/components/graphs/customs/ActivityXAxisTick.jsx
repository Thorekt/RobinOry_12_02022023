import React from 'react';
import PropTypes from 'prop-types';

/*
 * This is the a tick component for the X axis of the Activity graph.
 *
 * @param {number} x The x position of the tick.
 * @param {number} y The y position of the tick.
 * @param {object} payload The payload of the tick.
 * @returns {JSX.Element} The ActivityXAxisTick component.
 */

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
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

export default ActivityXAxisTick;
