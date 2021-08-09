import React from "react";
import ava from "../../../asset/images/ava.jpg";
import classes from "./Comment.module.css";

const Comment = (props) => {
  return (
    <div className={classes.cmtContainer}>
      <img className={classes.Ava} src={ava} alt="ava" />
      <div>
        <div className={classes.cmtName}>
          <div className={classes.Name}>{props.name}</div>
          <span>a day ago</span>
        </div>
        <div className={classes.cmtContent}>{props.body}</div>
        <div className={classes.Reply}>Reply to</div>
      </div>
    </div>
  );
};

export default Comment;
