import React from 'react';
import { Accordion, Button, Card, Row, Col } from 'react-bootstrap';

import thumbnail from '../assets/thumbnail.png';

const Comment = () => {
  return (
    <Row className='py-2'>
      <Col sm={1}>
        <img
          alt=''
          src={thumbnail}
          width='60'
          height='60'
          className='d-inline-block align-top'
        />{' '}
      </Col>
      <Col sm={11}>
        <div className='d-inline-flex'>
          <p>Han Solo</p>
          <p className='pl-3 text-muted'>a day ago</p>
        </div>

        <p>
          This is the content of the comment. And there's so much more than
          this. I will add more from fetch API later ...
        </p>
      </Col>
    </Row>
  );
};

const Comments = () => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant='link' eventKey='0'>
            2 replies
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            <Comment />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Comments;
