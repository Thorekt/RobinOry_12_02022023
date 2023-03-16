import React from 'react';

import '../styles/SmallerGraphZone.css';
import AverageSessionsGraph from './AverageSessionsGraph';
import PerformanceGraph from './PerformanceGraph';
import TodayScoreGraph from './TodayScoreGraph';

function SmallerGraphZone({ userId, todayScore }) {
  return (
    <div className='smaller-graph-zone'>
      <AverageSessionsGraph userId={userId} />
      <PerformanceGraph userId={userId} />
      <TodayScoreGraph todayScore={todayScore} />
    </div>
  );
}

export default SmallerGraphZone;
