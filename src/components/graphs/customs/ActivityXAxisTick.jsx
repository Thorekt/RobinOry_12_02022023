import React from 'react';

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

export default ActivityXAxisTick;
