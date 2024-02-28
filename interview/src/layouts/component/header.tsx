import React from "react";
import "../../layouts/layoutStyle.css";

const Header: React.FC = () => {
  return (
    <header className="header d-flex flex-row justify-content-between">
      <div className="logo d-flex flex-row">
        <div className="gray-column"></div>

        <span> Logo</span>
      </div>
      <div className="blog">Blogs</div>
      <div className="user-info">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="user-avatar"
        />

        <div className="user-name">Adam Levine</div>
      </div>
    </header>
  );
};

export default Header;
