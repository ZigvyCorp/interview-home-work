import React, { useEffect } from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <>
      <hr />
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentList;
