import React from "react";
import CommentItem from "./commentItem";

const CommentList = ({ comments }) => {
  return (
    <div>
      <div className="border-bottom mt-5 mb-3 ">
        <p
          className="text-muted btn btn-primary"
          data-toggle="collapse"
          href="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          {comments.length} replies
        </p>
      </div>

      {comments.map((item) => (
        <CommentItem content={item} className="collapse" id="collapseExample" />
      ))}
    </div>
  );
};

export default CommentList;
