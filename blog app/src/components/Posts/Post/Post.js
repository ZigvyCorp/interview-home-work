import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <div className={classes.Title}>{props.title}</div>
      <div className={classes.Author}>Author: John</div>
      <div className={classes.Day}>Created at: Sep 20, 2020</div>
      <div className={classes.Content}>{props.body}</div>
    </div>
  );
};

export default Post;
