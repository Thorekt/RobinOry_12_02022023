import React from 'react';
import '../styles/HeadDashboard.css';

/*
 * This is the head of the dashboard.
 * It contains the name of the user
 *
 * @param {string} name The name of the user.
 * @returns {JSX.Element} The head of the dashboard.
 */
function HeadDashboard({ nameUser }) {
  return (
    <div className='head-dashboard'>
      <h1>
        Bonjour <span>{nameUser}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default HeadDashboard;
