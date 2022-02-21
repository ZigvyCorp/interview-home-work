import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image'
import { REACT_APP_PUBLIC_FOLDER } from '../constants/config';
import './styles.scss';
import {Link, Outlet} from 'react-router-dom';
import Search from '../components/Search';
import { useState } from 'react';
function User({infor,...other}){


  return(
    <div className="user-infor">
      <Image
      className='avatar'
      src={REACT_APP_PUBLIC_FOLDER+"/no-avatar.jpg"} 
      />
      <span>
        Huy BlueNight
      </span>
    </div>
  )
}
function HomeLayout() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <Fragment>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand  as={Link} to="/">
              <Image src={REACT_APP_PUBLIC_FOLDER+"/logo.png"} 
              style = {{
                marginRight:10,
                width: 50,
                height:50
              }}/>
              Zigvy
            </Navbar.Brand>
            <div
              className="middle"
            >
              Blogs
            </div>
            
            <div style={{
              display:"flex",
              gap:10
            }}>
              <Button
              onClick={()=>setOpenSearch(true)}
              variant="success">
                Search
              </Button>
              <User/>
            </div>
          </Container>
          {openSearch&&<Search onClose={()=>setOpenSearch(false)}/>}
        </Navbar>
        <Container className='content'>
          <Outlet />
        </Container>
    </Fragment>
  )
}

export default HomeLayout