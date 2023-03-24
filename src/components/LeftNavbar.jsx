import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/LeftNavbar.css';
import icon1 from '../assets/icons/icon_left_navbar_1_64x64.svg';
import icon2 from '../assets/icons/icon_left_navbar_2_64x64.svg';
import icon3 from '../assets/icons/icon_left_navbar_3_64x64.svg';
import icon4 from '../assets/icons/icon_left_navbar_4_64x64.svg';

/*
 * This is the left navbar.
 *
 * @returns {JSX.Element} The left navbar.
 */
function LeftNavbar() {
  return (
    <div className='left-navbar'>
      <div className='left-navbar-items'>
        <Link>
          <img src={icon1} alt='Icon médiation.' />
        </Link>
        <Link>
          <img src={icon2} alt='Icon natation' />
        </Link>
        <Link>
          <img src={icon3} alt='Icon cyclisme' />
        </Link>
        <Link>
          <img src={icon4} alt='Icon haltere' />
        </Link>
      </div>
      <small>Copiryght, SportSee 2020</small>
    </div>
  );
}

LeftNavbar.propTypes = {};

export default LeftNavbar;
