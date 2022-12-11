import React from 'react';
import { NavLink } from 'react-router-dom';
import scss from './Header.module.scss';
import logo from '../../../assets/logo/logo.svg';
import user from '../../../assets/user/user.jpg';
import TabLink from './TabLink';

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss['header-container']}>
        <NavLink className={scss.logo} to='/'>
          <img src={logo} alt='logo' />
          <p>My Blogs</p>
        </NavLink>
        <nav className={scss.nav}>
          <ul>
            <li>
              <TabLink href='/all-posts' title='All Blogs' />
            </li>
          </ul>
        </nav>
        <div className={scss.user}>
          <img src={user} alt='user' />
          <p>Eva Levine</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
