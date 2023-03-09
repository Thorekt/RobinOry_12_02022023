import React from 'react';
import '../styles/KeyInformationCard.css';

function KeyInformationCard({ iconSrc, label, value, text }) {
  return (
    <div className='key-information-card'>
      <img src={iconSrc} alt={'icon ' + text} />
      <div>
        <span>{value + label}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default KeyInformationCard;
