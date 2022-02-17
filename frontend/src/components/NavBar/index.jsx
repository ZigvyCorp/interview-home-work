import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../logo.jpg";
import Avatar from "../Avatar";
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
            <Avatar name="P B" />
            Phuc Binh
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default NavBar;
