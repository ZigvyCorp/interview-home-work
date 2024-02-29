import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container text-center">
        <ul className="nav row">
          <li className="nav-item col">
            <Link className="nav-link active" aria-current="page" to="/">
              Logo
            </Link>
          </li>
          <li className="nav-item col">
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item col">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
