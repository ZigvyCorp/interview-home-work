import { notification } from 'antd';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
          <Link to="/">
          <img
          src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png" alt="logo" 
          width="50"
          />
          </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link href='#features'>Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>
              <img  width="50" src="https://haycafe.vn/wp-content/uploads/2022/03/Avatar-anime.jpg" alt="avatar" />
            </Nav.Link>
            <Nav.Link eventKey={2} href='#memes' >
              luongviettri
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
