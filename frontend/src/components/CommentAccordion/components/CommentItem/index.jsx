import React from "react";
import Avatar from "../../../Avatar";
import "./style.scss";

function CommentItem({ data, users }) {
  const getNameUserFromMail = (email) => email.split("@")[0];
  // console.log(data);
  return (
    <div className="d-flex comment-item">
      <Avatar name={getNameUserFromMail(data.email)} />
      <div>
        <h5>{getNameUserFromMail(data.email)}</h5>
        <p>{data.body}</p>
        <a href>Reply to</a>
      </div>
    </div>
  );
}

export default CommentItem;
