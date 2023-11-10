import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { fetchCommentRequest } from "../features/comments/actions";
import formatDate from "../utils/formatDate";
import Comment from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";

const PostDetail = () => {
  const location = useLocation();
  const [post, setPost] = useState(location?.state?.post);
  const dispatch = useDispatch();
  const { data: comments } = useSelector((state) => state.comment) ?? [];
  const { data: users } = useSelector((state) => state.user) ?? [];

  useEffect(() => {
    dispatch(fetchCommentRequest("comments"));
  }, [dispatch]);
  const getAuthorName = (id) => {
    const user = users?.find((user) => user.id === id);
    return user ? user.name : "Unknown Author";
  };
  return (
    <Container className="d-flex flex-column" key={post.id}>
      <Row className="d-flex text-center mt-3">
        <h2>{post.title}</h2>
      </Row>
      <Row>
        <Col className="fw-medium">Author: {getAuthorName(post.owner)}</Col>
      </Row>
      <Row>
        <Col className="fw-medium">
          Created at: {formatDate(post.createdAt)}
        </Col>
      </Row>
      <Row>
        <Container className="fw-medium">{post.content}</Container>
      </Row>
      <hr />
      <Comment comments={comments} postId={post.id} />
    </Container>
  );
};

export default PostDetail;
