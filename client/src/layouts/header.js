import { useEffect, useState } from 'react';
import { useNavigate,NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { searchPosts } from '../api/postApi';

function Header() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const handleInput = e => {
    setKeyword(e.target.value);
  };
  return (
    <Navbar bg="dark" variant="dark" style={{ marginBottom: '2rem' }}>
      <Container>
        <Navbar.Brand href="/">THE NGOC</Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink to={'/users'}>
          <p className="text-light me-3">Users</p>
          </NavLink>
          <Form className="d-flex" action={`/posts`}>
            <FormControl
              type="search"
              name="query"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={handleInput}
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;