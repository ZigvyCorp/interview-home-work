
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Dummy Social Club</a>
        </div>
        <ul className="nav navbar-nav navbar-right login-field">
          <NavLink to="/userdetail" exact><span className="glyphicon glyphicon-user"></span> Username</NavLink>
          <NavLink to="/login" exact><span className="glyphicon glyphicon-user"></span> Login</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;