import React from 'react';
import { Col, Row } from 'react-bootstrap';

import ColorfulLabels from './ColorfulLabels';
import Comments from './Comments';

const Post = (props) => {
  return (
    <div className='py-3'>
      <h1 className='text-center'>{props.post.title}</h1>
      <Row className='justify-content-between'>
        <Col sm={4}>
          <h6>Author: John Smith</h6>
          <h6>Created at: Sep 20, 2018</h6>
        </Col>
        <Col sm={4}>
          <ColorfulLabels />
        </Col>
      </Row>
      <br />
      <p className='py-3'>{props.post.body}</p>
      <br />
      <Comments />
    </div>
  );
};

export default Post;
