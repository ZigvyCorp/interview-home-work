import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import './index.css';
import Logo from '../../assets/logoes/64x64_light.png'
import Profile from '../../assets/profiles/user.png'

const Header = () => {
	return (		

		<Navbar
		  collapseOnSelect
		  expand="lg"
		  bg="light"
		  variant="light"
		  className="d-flex justify-content-between"
		  style={{border: 'solid 3px black'}}
		>

		  <Navbar.Brand href="/">
		    <img
					src={Logo}
					width="45"
					height="45"
					alt="Logo"
				/>{' '}
				<Navbar.Text>
      		Logo
    		</Navbar.Text>
			</Navbar.Brand>

			<Navbar.Brand href="/" className="px-5 " style={{backgroundColor: '#e5e5e5'}}>
				Blogs
			</Navbar.Brand>	
 
	    <Navbar.Brand>
				<img
					src={Profile}
					width="40"
					height="40"
					alt="Profile"
				/>{' '}
				<Navbar.Text>
      		Adam Levine
    		</Navbar.Text>
			</Navbar.Brand>

		</Navbar>

	)
}

export default Header