import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
export default function Header() {
  return (
    <Navbar bg="light">
      <Container fluid="lg" className="d-flex justify-content-between">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="text-center ">
          <Nav className="me-auto justify-content-center flex-grow-1">
            <Nav.Link href="/" className="fw-bold">
              Blogs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className=" ">
          <Nav.Link href="#">Account</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
