import React from "react";
import CommentItem from "./commentItem";

const CommentList = ({ comments }) => {
  return (
    <div>
      <div className="border-bottom mt-5 mb-3 ">
        <p
          className="text-muted"
          data-toggle="collapse"
          href="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          {comments.length} replies
        </p>
      </div>
      <div className="collapse" id="collapseExample">
        {comments.map((item) => (
          <CommentItem content={item} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
