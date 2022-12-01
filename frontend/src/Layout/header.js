import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import Search from "../components/Search/Search";

function Header() {


  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ marginBottom: "2rem" }}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">Hoang Anh</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/users">
              Users
            </Link>
          </Nav>

          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="keyword"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <Search/>
          <Nav className="justify-content-end">
            <Nav.Link>Signed in as: Mark Otto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Toggle /> */}
      </Container>
    </Navbar>
  );
}

export default Header;
