import React from 'react';
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

export default KeyInformationCard;
