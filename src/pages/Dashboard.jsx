import { React, useEffect, useState } from 'react';
import ActivityGraph from '../components/ActivityGraph';
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
 *
 * @returns {JSX.Element} The Dashboard page.
 */
function Dashboard({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(MockApi.getUserBaseInformation(userId).data);
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='dashboard'>
      <HeadDashboard nameUser={user.userInfos.firstName} />
      <div className='dashboard-content'>
        <div className='center-panel'>
          <ActivityGraph userId={userId} />
          <SmallerGraphZone userId={userId} />
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

export default Dashboard;
