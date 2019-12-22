
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Dummy Social Club</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <NavLink to="/userdetail" exact><span className="glyphicon glyphicon-user"></span> Username</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;