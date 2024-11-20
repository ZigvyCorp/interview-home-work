import React from "react";
import AvatarIcon from "../../assets/ic_avatar.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="row mx-0 navBar">
      <div className="d-flex align-items-center">
        <div className="navBox"></div>
        <div>
          <p className="my-0 navTitle pl-2">Logo</p>
        </div>
      </div>
      <div className="navBlog text-center justify-content-center d-flex align-items-center">
        <p className="my-0 navTitle">Blogs</p>
      </div>
      <div className="d-flex align-items-center">
        <img className="navAvatar mr-2" src={AvatarIcon} />
        <p className="my-0 navTitle">Adam Levine</p>
      </div>
    </div>
  );
};

export default Navbar;
