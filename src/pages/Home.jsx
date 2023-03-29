import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <Link to='/dashboard/12'>Utilisateur 12</Link>
      <Link to='/dashboard/18'>Utilisateur 18</Link>
    </div>
  );
}

export default Home;
