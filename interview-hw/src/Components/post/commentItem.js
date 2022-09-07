import React from "react";
import GuestAvatar from "../../assets/guest_avatar.png";

const CommentItem = ({ content }) => {
  console.log(content);
  return (
    <div className="d-flex mt-4 mb-0">
      <img width="40px" height="40px" className="mr-3" src={GuestAvatar}></img>
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
