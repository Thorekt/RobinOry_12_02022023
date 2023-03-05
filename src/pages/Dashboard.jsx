import React from 'react';
import ActivityGraph from '../components/ActivityGraph';
import HeadDashboard from '../components/HeadDashboard';
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
      <ActivityGraph/>
    </div>
  );
}

export default Dashboard;
