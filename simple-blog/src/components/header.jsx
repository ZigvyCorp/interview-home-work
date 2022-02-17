import React from "react";
import { ReactDOM } from "react";
import "../css/header.css"
import profile from '../img/user.png';
function Header(){
    return(
        <ul className="header">
          <li className="logo">
            <h3>Logo</h3>
          </li>
          <li className="title">
            <h3>Blogs</h3>
          </li>
          <li className="profile">
            <ul>
              <li><img src={profile} className="profile-icon"></img></li>
              <li><h3>Adam Levine</h3></li>
            </ul>
          </li>
        </ul>
    )
};

export default Header;