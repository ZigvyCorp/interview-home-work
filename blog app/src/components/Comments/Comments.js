import React, { useState } from "react";
import classes from "./Comments.module.css";
import Comment from "./Comment/Comment";

const Comments = (props) => {
  const [clicked, setClicked] = useState(false);

  let cmtResult = props.cmt.filter((c) => c.postId === props.id);

  const handleClick = () => {
    setClicked((preClick) => !preClick);
  };

  return (
    <div className={classes.Comments}>
      <div className={classes.cmtBtn}>
        <div>{cmtResult ? cmtResult.length : 0} replies</div>
        <button onClick={handleClick}>See all comments</button>
      </div>
      <hr />
      {clicked &&
        cmtResult.map((c) => (
          <Comment key={c.id} name={c.name} body={c.body} />
        ))}
    </div>
  );
};

export default Comments;
