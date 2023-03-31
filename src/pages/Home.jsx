import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

/*
 * This is the home page. It contains links to the dashboard of the users.
 *
 * @returns {JSX.Element} The home page.
 */
function Home() {
  return (
    <div className='home'>
      <Link to='/user/12'>Utilisateur 12</Link>
      <Link to='/user/18'>Utilisateur 18</Link>
    </div>
  );
}

export default Home;
