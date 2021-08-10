import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <Link to="/">Blogs</Link>
      <div className="users">
        <div className="users-icon">
          <UserOutlined />
        </div>
        <div className="users-name">Adam Levine</div>
      </div>
    </nav>
  );
};

export default Navbar;
