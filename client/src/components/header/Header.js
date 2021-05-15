import React from 'react';
import {  Col, Row, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Link } from 'react-router-dom';
const { Title } = Typography;
function Header() {
    return (
        <>
            <Row className="menu-bar">
                <Col span={6}>
                    <div className="logo">
                        <Link to="/">
                            <Title level={4} style={{color:'white'}}>Tin Tức</Title>
                        </Link>
                    </div>
                </Col>
                <Col span={12} className="menu">
                    <div className="menu-item">
                        <Link to="/">
                            <Title level={4} style={{color:'white'}}>Tin Tức</Title>
                        </Link>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="user">
                        <Avatar src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg" alt="...user"/>
                        <Title level={4} style={{color:'white',marginLeft:'5px'}}>Hoang Quoc Bao</Title>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Header;
