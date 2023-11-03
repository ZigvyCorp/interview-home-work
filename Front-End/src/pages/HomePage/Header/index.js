import React from 'react';
import { Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import './style.css';

export default function Header() {
  return (
    <Row className='text-center container-fluid'>
      <Col span={8}>   <NavLink className={({ isActive }) => isActive ? 'nav-hover  nav-link' : 'nav-link  nav'} to="/">  <FontAwesomeIcon icon={faBlog} /> </NavLink></Col>
      <Col span={8}>   <NavLink className={({ isActive }) => isActive ? 'nav-hover  nav-link' : 'nav-link  nav'} to="/home">Home</NavLink></Col>
      <Col span={8}>   <NavLink className={({ isActive }) => isActive ? 'nav-hover  nav-link' : 'nav-link  nav disabled'} to="/user"> <Avatar
        size={{ xs: 24, sm: 32, md: 35, lg: 40, xl: 45, xxl: 50 }} icon={<AntDesignOutlined />} /></NavLink></Col>
    </Row>
  )
}
