import React from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../../logo.jpg";
import "./style.scss";

function NavBar() {
  return (
    <Container fluid className="navbar-bg">
      <Container>
        <div className=" nav-bar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="page-title">
            <h1>Blogs</h1>
          </div>
          <div className="user">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
              className="rounded-circle z-depth-0 mr-2"
              alt="avatar image"
              height="35"
            />
            Phuc Binh
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default NavBar;
