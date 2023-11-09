import React from 'react';
import { default as logo } from '../../logo.svg';

const HeaderLogo = () => {
    return (
        <img src={logo} style={{ width: '70px', height: '70px' }} alt="logo" />
    );
};

export default HeaderLogo;