import React from 'react';
import { Col, Row } from 'react-bootstrap';

import ColorfulLabels from './ColorfulLabels';
import Comments from './Comments';

const Post = () => {
  return (
    <>
      <h1 className='text-center'>Post title1</h1>
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
      <p className='py-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Malesuada proin
        libero nunc consequat interdum varius sit. Semper auctor neque vitae
        tempus quam pellentesque nec nam. Dui id ornare arcu odio ut sem nulla
        pharetra diam. Posuere lorem ipsum dolor sit amet consectetur adipiscing
        elit. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin
        aliquam. Aliquam ultrices sagittis orci a. Commodo odio aenean sed
        adipiscing. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus
        urna. Nec ullamcorper sit amet risus nullam eget. At volutpat diam ut
        venenatis tellus in metus vulputate eu. Erat velit scelerisque in dictum
        non consectetur a erat nam. Cum sociis natoque penatibus et magnis.
        Faucibus et molestie ac feugiat sed. Vitae proin sagittis nisl rhoncus
        mattis rhoncus urna neque viverra.
      </p>
      <br />
      <Comments />
    </>
  );
};

export default Post;
