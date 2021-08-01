import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PublicNav() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Scribble
        </Navbar.Brand>
        <Nav className=''>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/'>
            About
          </Nav.Link>
          <Nav.Link as={Link} to='/'>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
