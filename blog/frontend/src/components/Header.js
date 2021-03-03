import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import thumbnail from '../assets/thumbnail.png';

const Header = () => {
  return (
    <header>
      <Nav className='justify-content-between bg-dark text-white py-2'>
        <Nav.Item className='pl-4'>
          <Nav.Link href='/'>
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='align-self-center'>Blogs</Nav.Item>
        <Nav.Item className='pr-3 align-self-center'>
          <img
            alt=''
            src={thumbnail}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          <span>Adam Levine</span>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;
