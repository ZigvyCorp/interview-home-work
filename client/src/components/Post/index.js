import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

function Post({ data }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title >{data.title}</Card.Title>
        <Card.Text style={{minHeight:'5rem'}}>
          {`${String(data.content).substring(0, 100)}...`}
        </Card.Text>
        <Card.Text>
          Author : {data.owner.name}
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default Post;