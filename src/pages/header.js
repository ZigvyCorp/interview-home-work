import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const Header = ({ onSearch }) => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ boxShadow: '0px 2px 2px gray' }} fixed='top'>
            <Container>
                <Navbar.Brand href="/">POSTS<sup>24h</sup></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Posts</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Enter search..."
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button onClick={handleSearch} variant="outline-success">Search</Button>
                    </Form>
                    <div className="user-info ml-auto">
                        <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="User"
                            className="rounded-circle" style={{ width: '30px', height: '30px', marginLeft: 10, marginRight: 5 }} />
                        <span className="ml-3">Unknown</span>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
