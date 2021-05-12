import React from "react";
import Post from "../Post";
import "./PostList.css";

const PostList = () => {
  return (
    <>
      <div className="container post__list__wrapper">
        <div className="row">
          <div className="col">
            <Post />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
