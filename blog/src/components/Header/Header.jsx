import React from "react";

import { UserOutlined } from "@ant-design/icons";

import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <span>Logo</span>
            </div>
            <div className="center">
                <Link to={"/"} className="link">
                    <span>Blogs</span>
                </Link>
            </div>
            <div className="right">
                <UserOutlined className="icon" />
                <span>Adam Levine</span>
            </div>
        </div>
    );
};

export default Header;
