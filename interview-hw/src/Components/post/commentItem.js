import React from "react";

const CommentItem = ({ content }) => {
  console.log(content);
  return (
    <div className="d-flex mt-4 mb-0">
      <img width="30px" height="30px" className="mr-3"></img>
      <div>
        <div className="d-flex">
          <p className="mr-2">{content.owner}</p>
          <p>a day ago</p>
        </div>
        <p>{content.content}</p>
        <p>Reply to</p>
      </div>
    </div>
  );
};

export default CommentItem;
