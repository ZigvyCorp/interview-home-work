import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button
} from "react-bootstrap";

function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ marginBottom: "2rem" }}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link className="justy" href="/blog">
              Blog
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
