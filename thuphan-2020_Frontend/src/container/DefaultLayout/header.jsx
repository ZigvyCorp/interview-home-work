import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {};
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="" className='ml-3'>
                    Logo
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <NavItem>
                        <Link className="nav-link" to="/blog">
                            Blogs
                        </Link>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto">
                    {/* <Nav.Link>Avatar</Nav.Link> */}
                    <Nav.Link>Adam Levine</Nav.Link>
                    <NavItem>
                        <Link className="nav-link" to="/login">
                            Sign out
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;
