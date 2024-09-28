import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logozigvy.png";
import avatar from '../../../../assets/images/noavatar.jpg'
import './header.css'

function Header() {

  return (
    <header className="wrapper">
      <div className="inner">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo ZigVy" />

          </Link>
          <Link to="/">
            <p className="textLogo">ZIGVY <br /> CORPORATION
            </p>
          </Link>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={avatar} alt="avatar" />

          </Link>
          <Link to="/">
            <p className="textLogo">Thanh Hòa <br /> Fresher
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
