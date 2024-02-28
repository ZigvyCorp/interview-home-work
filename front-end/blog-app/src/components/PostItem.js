import React from "react";
import CommentList from "./CommentList";

const PostItem = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <CommentList comments={post.comments} />
    </div>
  );
};

export default PostItem;
