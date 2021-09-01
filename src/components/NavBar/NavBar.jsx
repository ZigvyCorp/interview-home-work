import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const NavBarComponent = () => {

    return (
        <div style={{border: "solid"}}>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto" >
                            <Nav.Link href="/">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Avatar shape="square" size={32} icon={<UserOutlined />}/>
                            <Nav.Link href="#user">Truc</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBarComponent;