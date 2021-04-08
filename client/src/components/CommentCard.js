import React, { useState } from "react";
import { Button, Collapse, ListGroup } from "react-bootstrap";

const CommentCard = ({ comments, state }) => {
  const [open, setOpen] = useState(state);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="collapse-text"
      >
        {comments.length > 1
          ? comments.length + " replies"
          : comments.length + " reply"}
      </Button>
      <Collapse in={open}>
        <ListGroup variant="flush" id="collapse-text">
          {comments.map((comment) => (
            <ListGroup.Item key={comment.id}>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Collapse>
    </>
  );
};

export default CommentCard;
