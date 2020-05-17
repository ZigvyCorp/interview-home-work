import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Space } from 'antd';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import H3 from '../../components/H3';
// import Banner from './banner.jpg';
import messages from './messages';
import './styles.css';
// {/* <A href="https://www.reactboilerplate.com/">
//   <Img src={'/banner.jpg'} alt="react-boilerplate - Logo" />
// </A> */}

const userName = 'Adam Levine';

function Header(props) {
  return (
    <>
      <Row gutter={16} className="space-align-container">
        <Col span={8} className="gutter-row">
          <H3>Logo</H3>
        </Col>
        <Col span={8}>
          <H3>Blogs</H3>
        </Col>
        <Col span={8}>
          <Row className="space-align-container">
            <Col span={4}>
              <Img
                src={
                  'https://gravatar.com/avatar/490e1c1cd09b05dd89976fa944b548bb?s=400&d=robohash&r=x'
                }
                alt=""
              />
            </Col>
            <Col span={12}>
              <H3>{userName}</H3>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Header;
