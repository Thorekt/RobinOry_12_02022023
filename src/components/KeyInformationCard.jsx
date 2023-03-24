import React from 'react';
import PropTypes from 'prop-types';
import '../styles/KeyInformationCard.css';

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
