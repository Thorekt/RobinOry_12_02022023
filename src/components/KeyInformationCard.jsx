import React from 'react';
import PropTypes from 'prop-types';
import '../styles/KeyInformationCard.css';

/*
 * This is the a card component for each infomration in the right panel .
 *
 * @param {string} iconSrc The path to the icon.
 * @param {string} label The label of the information.
 * @param {number} value The value of the information.
 * @param {string} name The name of the information.
 * @returns {JSX.Element} The KeyInformationCard component.
 */
function KeyInformationCard({ iconSrc, label, value, name }) {
  return (
    <div className='key-information-card'>
      <img src={iconSrc} alt={'icon ' + name} />
      <div>
        <span className='value'>{value + label}</span>
        <span className='name'>{name}</span>
      </div>
    </div>
  );
}

KeyInformationCard.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default KeyInformationCard;
