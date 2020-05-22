import React from 'react';
import { Link } from 'react-router-dom';

export const LinkButton = ({ to, buttonText }) => (
  <Link to={to}>
    <button
      className='unicorn-button'
      key={`link-to-button-${buttonText.replace(' ', '-')}`}
    >
      {buttonText}
    </button>
  </Link>
);
