import React from "react";
import classes from "./comment.module.css";
import { IComment } from "@/redux/action/comment.action";

const Comment: React.FC<IComment> = (data) => {
  const { id, name, body, postId } = data;
  return (
    <section className={classes.comment}>
      <div className={classes.commentAvatar}>avatar</div>
      <div className={classes.commentContent}>
        <div>
          {name} <span>a day ago</span>
        </div>
        <p>{body}</p>
        <button>Reply to</button>
      </div>
    </section>
  );
};

export default Comment;
