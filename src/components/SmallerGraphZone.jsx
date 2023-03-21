import React from 'react';

import '../styles/SmallerGraphZone.css';
import AverageSessions from './graphs/AverageSessions';
import Performance from './graphs/Performance';
import TodayScore from './graphs/TodayScore';

function SmallerGraphZone({ userId, todayScore }) {
  return (
    <div className='smaller-graph-zone'>
      <AverageSessions userId={userId} />
      <Performance userId={userId} />
      <TodayScore todayScore={todayScore} />
    </div>
  );
}

export default SmallerGraphZone;
