import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <div className="navbar__logo">
          <div className="navbar__logoimg"></div>
          <Link to="/" className="navbar__link">
            Logo
          </Link>
          {/* <a href="#" className="navbar__link">
            Logo
          </a> */}
        </div>

        <div className="navbar__home">
          <Link to="/" className="navbar__link navbar__link--home">
            Blogs
          </Link>

          {/* <a href="#" className="navbar__link navbar__link--home">
            Blogs
          </a> */}
        </div>

        <div className="navbar__user">
          <img
            src="https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
            alt=""
            className="navbar__img"
          />
          <Link to="/user" className="navbar__link navbar__user--name">
            Phong
          </Link>
          {/* <a href="#" className="navbar__link navbar__user--name">
            Phong
          </a> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
