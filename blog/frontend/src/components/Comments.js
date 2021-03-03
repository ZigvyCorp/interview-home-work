import React from 'react';
import { Accordion, Button, Card, Row, Col } from 'react-bootstrap';

import thumbnail from '../assets/thumbnail.png';
import UserHeader from './UserHeader';

const Comment = ({ comment }) => {
  const renderTime = () => {
    const [_, __, commentDay] = comment.createdAt.split('T')[0].split('-');

    const today = new Date();
    const currentDay = today.getDate();

    const distance = currentDay - +commentDay;

    return distance === 1 ? 'a day ago' : `${distance} days ago`;
  };

  return (
    <Row className='py-2'>
      <Col sm={1}>
        <img
          alt=''
          src={thumbnail}
          width='50'
          height='50'
          className='d-inline-block align-top'
        />{' '}
      </Col>
      <Col sm={11}>
        <div className='d-inline-flex'>
          <UserHeader userId={comment.user} type='comment' />
          <p className='pl-3 text-muted'>{renderTime()}</p>
        </div>

        <p>{comment.body}</p>

        <p className='text-muted'>Reply to</p>
      </Col>
    </Row>
  );
};

const Comments = ({ comments }) => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant='link' eventKey='0'>
            {comments.length} replies
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            {comments.map((comment) => (
              <div key={comment._id}>
                <Comment comment={comment} />
              </div>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Comments;
