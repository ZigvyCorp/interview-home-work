// import React from 'react'
import { Button, Container } from "react-bootstrap";
// import { PostDataType } from "../model";
import { CommentSVG } from "../../../assets/icons/CommentSVG";

type PostCommentType = {
  countComment: number;
  postId: string;
  handleShow: () => void;
  getPostId: (postId: string) => void;
};

export default function PostComment({
  countComment,
  handleShow,
  postId,
  getPostId,
}: PostCommentType) {
  return (
    <Container className="my-1 d-flex align-items-center">
      <Button
        type="button"
        variant="outline-info"
        onClick={() => {
          handleShow();
          getPostId(postId);
        }}
      >
        <CommentSVG />
      </Button>
      <p className="m-0 mx-2">{countComment.toString()} replies</p>
    </Container>
  );
}
