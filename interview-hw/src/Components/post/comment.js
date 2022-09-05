import React from "react";
import CommentItem from "./commentItem";

const CommentList = ({ comments }) => {
  return (
    <div>
      <div className="border-bottom mt-5 mb-3 ">
        <p className="text-muted">{comments.length} replies</p>
      </div>

      {comments.map((item) => (
        <CommentItem content={item} />
      ))}
    </div>
  );
};

export default CommentList;
