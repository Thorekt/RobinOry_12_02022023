import React from 'react';

import '../styles/SmallerGraphZone.css';
import AverageSessionsGraph from './graph/AverageSessionsGraph';
import PerformanceGraph from './graph/PerformanceGraph';
import TodayScoreGraph from './graph/TodayScoreGraph';

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
