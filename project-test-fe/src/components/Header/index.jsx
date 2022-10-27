import React from "react";
import {Row, Col, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './styles.scss';
const Header = () => {
    return (
        <>
            <Row className="header">
                <Col span={9} className="left-header">
                    <Row wrap={false}>
                        <Col flex="none">
                            <div style={{ padding: '0 32px' }} />
                        </Col>
                        <Col flex="auto">Logo</Col>
                    </Row>
                </Col>
                <Col span={6} className="middle-header">
                    <div>
                        Blogs
                    </div>
                </Col>
                <Col span={9} className="right-header">
                    <Avatar className="avt-user" shape="square" size={32} icon={<UserOutlined />} />
                    <div className="name-user">Adam Levind</div>
                </Col>
            </Row>
            <Row className="after-header">
                <div className="item"></div>
            </Row>
        </>
    )
}

export default Header;