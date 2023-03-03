import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/TopNavbar.css';
import logo from '../assets/icons/icon_logo_sportsee_178x60.93.svg';

/*
 * This is the top navbar.
 *
 * @returns {JSX.Element} The top navbar.
 */
function TopNavbar() {
  return (
    <nav className='top-navbar'>
      <div className='top-navbar__logo'>
        <img src={logo} alt='SportSee' />
      </div>
      <Link>Accueil</Link>
      <Link>Profil</Link>
      <Link>Réglage</Link>
      <Link>Communauté</Link>
    </nav>
  );
}

export default TopNavbar;
