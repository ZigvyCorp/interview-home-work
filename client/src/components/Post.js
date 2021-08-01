import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Post({ post, id }) {
  return (
    <Card style={{ width: '25vw', margin: '1rem' }}>
      <Card.Img
        variant='top'
        src='https://i.pinimg.com/originals/1e/90/72/1e9072ad791c9221fbcf0ac94842db9d.jpg'
        style={{ width: '100%' }}
      />
      <Card.Body>
        <Card.Title>
          {post?.title?.charAt(0).toUpperCase() + post?.title?.substring(1)}
        </Card.Title>
        <Card.Text>
          {post?.body?.slice(0, 99) + '...'}
          {/* <br />
      Comments: {} */}
        </Card.Text>
        <Button variant='info' as={Link} to={`/posts/${id}`}>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
}
