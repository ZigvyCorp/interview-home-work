// Logo.js
import React from 'react';
import logoImage from './logo.png';

const Logo = () => {
  return (
    <img src={logoImage} alt="Logo" style={{ width: '50px', height: 'auto' }} />
  );
};

export default Logo;
