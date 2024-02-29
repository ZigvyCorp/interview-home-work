import React from "react";
import avatar from "../images/avt.jpg";
import "../styles/reply.css";
import { differenceInDays } from "date-fns";
const Reply = (props) => {
  const { item } = props;

  // calculate days diff from comment day to current day
  const currentDate = new Date();
  const daysDiff = differenceInDays(currentDate, new Date(item?.created_at));

  return (
    <div className="d-flex mt-2 ">
      <img className="reply-img" src={avatar} alt="logo" />
      <div className="reply-content">
        <div className="d-flex align-items-center">
          <p className="reply-text-name">{item?.owner?.username}</p>
          <p className="ms-2 reply-text-date">{daysDiff} day(s) ago</p>
        </div>
        <div className="mt-1">
          <p>{item?.content}.</p>
        </div>
        <button className="reply-btn">Reply to</button>
      </div>
    </div>
  );
};

export default Reply;
