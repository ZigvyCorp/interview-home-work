import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div>
      <h4>Comments:</h4>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            <strong>{comment.name}</strong>
          </p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
