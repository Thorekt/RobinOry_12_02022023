import React from 'react';

import '../styles/SmallerGraphZone.css';
import AverageSessionsGraph from './graphs/AverageSessionsGraph';
import PerformanceGraph from './graphs/PerformanceGraph';
import TodayScoreGraph from './graphs/TodayScoreGraph';

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
