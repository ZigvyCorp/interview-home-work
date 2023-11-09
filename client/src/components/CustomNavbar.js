import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomNavbar() {
    return (
        <Navbar expand="lg" className="bg-primary">
            <Container>
                <Navbar.Brand href="#home" className='text-light'>Blogging.io</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="text-white w-100 me-auto d-flex flex-row justify-content-between align-items-center">
                        <Nav.Link className='flex-grow-1 text-light'>/ Blogs</Nav.Link>
                        <SearchBar />
                        <Nav.Link className='flex-grow-1 text-light'>Jessy Moore</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;