import React from 'react';
import ActivityGraph from '../components/ActivityGraph';
import HeadDashboard from '../components/HeadDashboard';
import KeyInformationCard from '../components/KeyInformationCard';

import caloriesSrc from '../assets/icons/icon_calories_60x60.svg';
import carbsSrc from '../assets/icons/icon_carbs_60x60.svg';
import fatSrc from '../assets/icons/icon_fat_60x60.svg';
import proteinSrc from '../assets/icons/icon_protein_60x60.svg';

import '../styles/Dashboard.css';

/*
 * This is the Dashboard page.
 *
 * @returns {JSX.Element} The Dashboard page.
 */
function Dashboard() {
  return (
    <div className='dashboard'>
      <HeadDashboard nameUser='Thomas' />
      <div className='dashboard-content'>
        <div className='center-panel'>
          <ActivityGraph />
        </div>
        <div className='right-panel'>
          <KeyInformationCard
            iconSrc={caloriesSrc}
            label='kCal'
            value='123'
            name='Calories'
          />
          <KeyInformationCard
            iconSrc={proteinSrc}
            label='g'
            value='123'
            name='Proteines'
          />
          <KeyInformationCard
            iconSrc={carbsSrc}
            label='g'
            value='123'
            name='Glucides'
          />
          <KeyInformationCard
            iconSrc={fatSrc}
            label='g'
            value='123'
            name='Lipides'
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
