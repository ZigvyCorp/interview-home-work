import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { Logo } from './Logo';
import { Search } from './Search';
import { User } from './User';

const { Header: HeaderAntDesign } = Layout;

const headerStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderBottom: '1px solid #ccc',
  marginBottom: 2
};

export function Header() {
  return (
    <HeaderAntDesign style={headerStyle}>
      <Row gutter={100}>
        <Col className="logo_name_blog">
          <Row>
            <Col className="logo">
              <Logo />
            </Col>
            <Col className="nameBlog">
              <Typography style={{ fontSize: 24, fontFamily: "'Ubuntu', sans-serif", margin: 8 }}>
                Zigvy Blog
              </Typography>
            </Col>
          </Row>
        </Col>

        <Col>
          <Search />
        </Col>

        <Col>
          <User />
        </Col>
      </Row>
    </HeaderAntDesign>
  );
}
