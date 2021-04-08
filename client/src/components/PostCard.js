import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import CommentCard from "./CommentCard";
import moment from "moment";

const PostCard = ({ id, title, authorName, body, comments, collapseState }) => {
  return (
    <Card>
      <Card.Header as="h5">
        {id !== undefined ? (
          <Link to={`/posts/${id}`}>{title.substring(0, 100)}</Link>
        ) : (
          <>{title}</>
        )}
      </Card.Header>
      <Card.Body>
        <Card.Title>Author: {authorName}</Card.Title>
        <Card.Title>
          Created at:{" "}
          {moment(
            new Date(+new Date() - Math.floor(Math.random() * 10000000000))
          ).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Text>{body}</Card.Text>
        <CommentCard comments={comments} state={collapseState} />
      </Card.Body>
    </Card>
  );
};

export default PostCard;
