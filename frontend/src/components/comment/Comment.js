import React, { useState } from "react";
import { Button, Collapse, Card } from "react-bootstrap";

function Comment(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="link"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        {props.length > 0 &&
          props.map((comment, index) => (
            <Card className="text-center">
              <Card.Body>
                <p>{comment.owner?.name}</p>
                <Card.Text>
                  {comment.content}
                </Card.Text>
                <Button variant="link">Reply to</Button>
              </Card.Body>
            </Card>
          ))}
      </Collapse>
    </>
  );
}

export default Comment;
