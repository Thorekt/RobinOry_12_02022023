import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Activity from '../components/graphs/Activity';
import HeadDashboard from '../components/HeadDashboard';
import KeyInformationCard from '../components/KeyInformationCard';
import SmallerGraphZone from '../components/SmallerGraphZone';

import caloriesSrc from '../assets/icons/icon_calories_60x60.svg';
import carbsSrc from '../assets/icons/icon_carbs_60x60.svg';
import fatSrc from '../assets/icons/icon_fat_60x60.svg';
import proteinSrc from '../assets/icons/icon_protein_60x60.svg';

import MockApi from '../utils/MockApi';

import '../styles/Dashboard.css';

/*
 * This is the Dashboard page.
 * @param {int} userId The id of the user.
 * @returns {JSX.Element} The Dashboard page.
 */
function Dashboard({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(MockApi.getUserBaseInformation(userId).data);
  }, [userId, user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  if (!user.todayScore && user.score) {
    user.todayScore = user.score;
  }

  return (
    <div className='dashboard'>
      <HeadDashboard nameUser={user.userInfos.firstName} />
      <div className='dashboard-content'>
        <div className='center-panel'>
          <Activity userId={userId} />
          <SmallerGraphZone userId={userId} todayScore={user.todayScore} />
        </div>
        <div className='right-panel'>
          <KeyInformationCard
            iconSrc={caloriesSrc}
            label='kCal'
            value={user.keyData.calorieCount}
            name='Calories'
          />
          <KeyInformationCard
            iconSrc={proteinSrc}
            label='g'
            value={user.keyData.proteinCount}
            name='Proteines'
          />
          <KeyInformationCard
            iconSrc={carbsSrc}
            label='g'
            value={user.keyData.carbohydrateCount}
            name='Glucides'
          />
          <KeyInformationCard
            iconSrc={fatSrc}
            label='g'
            value={user.keyData.lipidCount}
            name='Lipides'
          />
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  userId: PropTypes.number,
};

export default Dashboard;
