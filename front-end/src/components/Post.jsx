import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Author from "./Author";
import Tags from "./Tags";
import CommentList from "./CommentList";
import { Link, useLocation } from "react-router-dom";
export default function Post({ post }) {
  const location = useLocation();
  const isCurrentPostPage = location.pathname === `/post/${post._id}`;
  const [showComment, setShowComment] = useState(false);
  const handleToggleComment = () => {
    if (post?.commentCount > 0) {
      setShowComment((prevShowComment) => !prevShowComment);
    }
  };
  return (
    <Card key={post._id} className="mt-2" border="dark">
      <Card.Header>
        <Card.Title className="fw-bold text-center h2">
          {isCurrentPostPage ? (
            <span>{post.title}</span>
          ) : (
            <Link to={`post/${post._id}`} style={{ textDecoration: "none", color: "black" }}>
              {post.title}
            </Link>
          )}
        </Card.Title>
        <div className="d-flex justify-content-between">
          <div>
            <Author author={post?.owner?.username} created={post?.created_at} />
          </div>
          <div className="" style={{ width: "50%" }}>
            <Tags tags={post?.tags} />
          </div>
        </div>
      </Card.Header>
      <Card.Body>{post?.content}</Card.Body>
      <Card.Footer>
        <div style={{ cursor: "pointer" }} onClick={handleToggleComment}>
          <p className="text-black-50">
            {post?.commentCount > 0
              ? post?.commentCount + (post?.commentCount > 1 ? " replies" : " reply")
              : "No Comment"}
          </p>
          {showComment && <CommentList postId={post._id} />}
        </div>
      </Card.Footer>
    </Card>
  );
}
