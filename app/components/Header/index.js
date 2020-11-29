import React from 'react';
import _ from 'lodash';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import H3 from '../H3';
// import Banner from './banner.jpg';
import messages from './messages';
import './styles.css';

import UserActions, {
  UserSelectors,
  UserTypes,
} from '../../containers/App/reducer';

function Header({ user }) {
  const username = _.get(user, 'username', 'Customer');

  const dispatch = useDispatch();

  const onClickUsername = () => {
    dispatch(UserActions.logout());
  };

  return (
    <Row className="container">
      <Col span={8} className="center">
        <H3>
          <Link to="/">Home</Link>
        </H3>
      </Col>
      <Col span={8} className="center">
        <H3>Blogs</H3>
      </Col>
      <Col span={8}>
        <Row className="end">
          <Col span={4} className="center">
            <Img
              src="https://gravatar.com/avatar/490e1c1cd09b05dd89976fa944b548bb?s=300&d=robohash&r=x"
              alt=""
            />
          </Col>
          <Col span={12}>
            <div className="center">
              <H3>
                {!user ? (
                  <Link to="/login">{'Customer'}</Link>
                ) : (
                    <A onClick={onClickUsername}>{username} {"(Logout)"}</A>
                )}
              </H3>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
