import React from 'react';

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

export default ActivityYAxisTick;
