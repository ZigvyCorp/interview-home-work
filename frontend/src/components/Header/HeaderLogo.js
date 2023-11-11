import React from 'react';
import { Link } from 'react-router-dom';
import { default as logo } from '../../logo.svg';

const HeaderLogo = () => {
    return (
        <Link to={'/'}>
            <img
                src={logo}
                alt="logo"
                style={{ width: '50px', height: '50px', verticalAlign: 'middle' }}
            />
        </Link>
    );
};

export default HeaderLogo;