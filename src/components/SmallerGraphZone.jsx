import React from 'react';
import PropTypes from 'prop-types';

import '../styles/SmallerGraphZone.css';
import AverageSessions from './graphs/AverageSessions';
import Performance from './graphs/Performance';
import TodayScore from './graphs/TodayScore';

/*
 * This is the bottom component of the center panel, it contains 3 graphs.
 *
 * @param {number} userId The id of the user.
 * @param {number} todayScore The score from the current day for this user.
 * @returns {JSX.Element} The SmallerGraphZone component.
 */
function SmallerGraphZone({ userId, todayScore }) {
  return (
    <div className='smaller-graph-zone'>
      <AverageSessions userId={userId} />
      <Performance userId={userId} />
      <TodayScore todayScore={todayScore} />
    </div>
  );
}

SmallerGraphZone.propTypes = {
  userId: PropTypes.number.isRequired,
  todayScore: PropTypes.number.isRequired,
};

export default SmallerGraphZone;
