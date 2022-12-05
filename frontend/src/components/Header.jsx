import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
const Header = () => {
    return (
        <div className='header'>
            <div className="left">
                <Link to='/'>
                    <span className="logo">LOGO</span>
                </Link>
            </div>
            <div className="center">
                <Link to='/'>
                    <p className="title">Blog Site</p>
                </Link>
            </div>
            <div className="right">
                <span className="avatar">
                    <Avatar
                        style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
                        size="large"
                        gap={4}
                    >
                        MT
                    </Avatar>
                </span>
                <p className="username">
                    Minh Toan
                </p>
            </div>
        </div>
    )
}

export default Header