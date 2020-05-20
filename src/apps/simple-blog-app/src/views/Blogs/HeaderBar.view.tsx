import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';
interface IProps {
}

interface IState {
}
class HeaderBar extends React.PureComponent<IProps, IState> {
	render() {
		return (
			<Navbar bg="dark" expand="lg" variant="dark" sticky="top">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto ml-auto">
						<Nav.Link href="#blogs">Blogs</Nav.Link>
					</Nav>
					<Nav className="ml-auto">
						<Form inline className="mr-3">
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
						</Form>
						<Image 
							width={40} 
							height={40} 
							src="https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png" roundedCircle 
							/>
						<NavDropdown title="That Nguyen" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default HeaderBar;
