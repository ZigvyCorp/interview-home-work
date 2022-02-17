import React from "react";
import { Accordion } from "react-bootstrap";
import CommentItem from "./components/CommentItem";
import "./style.scss";

function CommentArrcordion({ comments, users }) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <ion-icon name="chatbox-outline"></ion-icon> {comments.length} replies
        </Accordion.Header>
        <Accordion.Body>
          {comments.map((comment) => (
            <CommentItem data={comment} users={users} />
            // <p>{comment.body}</p>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CommentArrcordion;
