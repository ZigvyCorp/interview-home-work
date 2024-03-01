import React from "react";
import { timeAgo } from "../utils/formateDate";
import avatar from "../images/avatar.png";
function Comment({ comment }) {
  return (
    <div className="d-flex ">
      <div className="justify-content-center align-items-center me-2">
        <img src={avatar} alt="Avatar" width="50" />
      </div>
      <div className="">
        <p className="text-black-50 ">
          {comment?.owner?.username + " "}
          {timeAgo(comment?.created_at)}
        </p>
        <p>{comment?.content}</p>
        <p className="text-black-50 ">Reply to</p>
      </div>
    </div>
  );
}

export default Comment;
