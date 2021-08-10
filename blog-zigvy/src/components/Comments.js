import React from "react";

const Comments = ({ cmt }) => {
  return (
    <ul>
      <li>
        <h3>Comment by: {cmt.email}</h3>
        <h4>{cmt.body}</h4>
      </li>
    </ul>
  );
};

export default Comments;
