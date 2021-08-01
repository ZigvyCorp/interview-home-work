import React from "react";
import Post from "./Post/Post";
import Comments from "../Comments/Comments";
import classes from "./Posts.module.css";
import { Link } from "react-router-dom";

const Posts = (props) => {
  return (
    <div className={classes.Posts}>
      <Link className={classes.Post} to={"/" + props.id}>
        <Post
          title={props.title}
          body={props.body.substr(0, 100) + "..."}
          selectedPost={props.selectedPost}
        />
      </Link>
      <Comments id={props.id} cmt={props.cmt} />
    </div>
  );
};

export default Posts;
