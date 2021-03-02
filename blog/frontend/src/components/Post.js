import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import ColorfulLabels from './ColorfulLabels';
import Comments from './Comments';

const Post = ({ post, users }) => {
  const renderContent = () =>
    post.body.length > 100 ? post.body.substr(0, 100) + ' ...' : post.body;

  const renderAuthor = () => {
    return users.filter((user) => user._id === post.user)[0]
      ? users.filter((user) => user._id === post.user)[0].name
      : '';
  };

  const renderTime = (createdAt) => {
    let [yy, mm, dd] = createdAt.split('T')[0].split('-');

    switch (mm) {
      case '01':
        mm = 'Jan';
        break;
      case '02':
        mm = 'Feb';
        break;
      case '03':
        mm = 'Mar';
        break;
      case '04':
        mm = 'Apr';
        break;
      case '05':
        mm = 'May';
        break;
      case '06':
        mm = 'Jun';
        break;
      case '07':
        mm = 'July';
        break;
      case '08':
        mm = 'Aug';
        break;
      case '09':
        mm = 'Sep';
        break;
      case '10':
        mm = 'Oct';
        break;
      case '11':
        mm = 'Nov';
        break;
      default:
        mm = 'Dec';
    }

    return `${mm} ${dd}, ${yy}`;
  };

  return (
    <div className='py-3'>
      <h1 className='text-center'>{post.title}</h1>
      <Row className='justify-content-between'>
        <Col sm={4}>
          <h6>Author: {renderAuthor()}</h6>
          <h6>Created at: {renderTime(post.createdAt)}</h6>
        </Col>
        <Col sm={4}>
          <ColorfulLabels />
        </Col>
      </Row>
      <br />
      <p className='py-3'>{renderContent()}</p>
      <br />
      <Comments />
    </div>
  );
};

const mapStatesToProps = (state) => {
  return { users: state.users.users };
};

export default connect(mapStatesToProps)(Post);
