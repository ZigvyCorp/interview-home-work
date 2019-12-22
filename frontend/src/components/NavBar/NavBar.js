import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Menu, Dropdown, Icon } from 'antd';

import './NavBar.css';

export default ({isAuthenticated, userInfor}) => {
  const userName = userInfor.name || '';
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/create-new-post">
          Create New Post
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/logout">
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (  
    <div className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <div className="logo-box">Logo</div>
        </li>
        <li className="nav-item">
          <Link to="/" className="title">Blogs</Link>
        </li>
        <li className="nav-item">
          {isAuthenticated ? 
          <div className="account-box">
            <Avatar shape="square" size={44} icon="user" />
            <Dropdown overlay={menu}>
              <span className="account-name">{userName} <Icon type="down" style={{ fontSize: '20px' }} /></span>
            </Dropdown>
          </div> :
          <div className="login-box">
            <Link to="/login" className="nav-links">Login </Link>
            or
            <Link to="/signup" className="nav-links"> Sign Up</Link>
          </div>
          }
        </li>
      </ul>
    </div>
  )
}