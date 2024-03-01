import React from 'react'
import { Avatar, Layout, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './Header.css'
import { useSelector } from 'react-redux';

const Header = () => {
    const { Header } = Layout;
    const { user } = useSelector(state => state.user)

    return (
        <Header className='header'>
            <div className="logo">
                <Link to='/'>
                    <img alt='logo' src="https://cdn.sanity.io/images/kts928pd/production/d12dfdbd6b7501faf694ac42775f19451aee8805-324x328.png" className='logo-img' />
                </Link>
            </div>
            <div className="menu">
                <Link to="/">Blogs</Link>
            </div>
            <div className='user-info'>
                <Space>
                    <Avatar size="large" src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" />
                    <Typography.Text strong>{user.name}</Typography.Text>
                </Space>
            </div>
        </Header>
    )
}

export default Header
