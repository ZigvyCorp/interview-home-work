import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/mouse.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
      <div className="logo">
        <h2>LOGO</h2>
      </div>

      <div className="mx-auto">
        <button className="btn" onClick={() => navigate('/')}>
          Blog
        </button>
      </div>

      <div className="user-name">
        <img src={logo} alt="Logo" className="img-fluid" style={{ width: '50px' }} />
        <span className="me-3">Adam Levine</span>
      </div>

    </div>
  );
};

export default Header;
