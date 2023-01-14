import React from 'react';
import { Card, Button, Row, Col } from "react-bootstrap";
import Tag from '../tag/Tag';
import Comment from '../comment/Comment';

function Post(props) {
    return (
        <Card>
        <Card.Body>
          <Card.Title className="text-center">{props.title}</Card.Title>
          <Row className="d-flex m-2">
            <Col xs={8}>
              <Card.Text>Author : {props.owner?.name}</Card.Text>
              <Card.Text>{props.created_at}</Card.Text>
            </Col>
            <Col xs={4}>
              {props.tags.length > 0 &&
                props.tags.map((tag, index) => (
                 <Tag key={tag} tagName={tag}/>
                ))}
            </Col>
          </Row>
          <Card.Text>
            {`${props.content.substring(0, 100)}...`}
          </Card.Text>
          <Button href={`/posts/${props._id}`}>Read More</Button>
        </Card.Body>
        <Card.Footer className="text-muted me-2">
          {props.comments.length} relies
          <Comment />
        </Card.Footer>
      </Card>
    );
  }
export default Post;