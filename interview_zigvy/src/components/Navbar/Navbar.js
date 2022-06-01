import React from "react";
import { Form, Container, Nav, Navbar as Navb } from "react-bootstrap";
import "./Navbar.css";
function Navbar() {
  return (
    <Navb expand="lg" variant="dark" bg="dark">
      <Container>
        <Navb.Brand className="me-3" href="#">Blogs</Navb.Brand>
      <Nav className="me-2">
         
</Nav>
            <Nav className="user me-3">
              <Nav.Link href="#">
                <img
                  src="https://i.pinimg.com/564x/fe/ab/86/feab8679c4e4df4be488bebad3d6d8f0.jpg"
                  alt="Avatar"
                  className="user__avatar"
                />
                <Navb.Text className="user__name">Adam Levine</Navb.Text>
              </Nav.Link>
              
            </Nav>
         
      
      </Container>
    </Navb>
  );
}

export default Navbar;
