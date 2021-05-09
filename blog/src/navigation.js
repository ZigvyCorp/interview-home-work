import { Nav, Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar fixed="top" bg='dark' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='/home'>Logo</Nav.Link>
              <Nav.Link href='/blogs'>Blogs</Nav.Link>
              <Nav.Link href='/user'>Adam Levine</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;