import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <div className="header">
            <div className="header__logo">
                <NavLink to='/'>
                    <img src='' src="https://abrokenbackpack.com/wp-content/uploads/2021/06/A-Broken-Backpack-Logo-PNG-3.png"
                        alt='src="https://abrokenbackpack.com/wp-content/uploads/2021/06/A-Broken-Backpack-Logo-PNG-3.png"' />
                </NavLink>
            </div>
            <div className="header__blog">
                <NavLink to='/'>
                    <span>Blog trarvel</span>
                </NavLink>
            </div>
            <div className="header__avatar">
                <Avatar size="large" icon={<UserOutlined />} style={{ marginRight: 10 }} />
                <span>Adam Levine</span>
            </div>
        </div>
    )
}
