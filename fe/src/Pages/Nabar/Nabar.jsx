import React from 'react'
import { Col, Row } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import "./Nabar.css"
const  Nabar = () =>{
  return (
    <Row className='navbar'>
      <Col xl={8} lg={8} md={8} xs={8}  className='navbar-logo'>Logo</Col>
      <Col xl={8} lg={8} md={8} xs={8} className='navbar-title'>Blogs</Col>
      <Col xl={8} lg={8} md={8} xs={8} className='navbar-user'>
        <UserOutlined /> <span>Admin Levine</span>
      </Col>
    </Row>
  )
} 
export default Nabar;
