import React from "react";
import Blogitem from "./Blogitem";
// import CommentItem from "./CommentItem";

const BlogList = ({ blogList }) => {
  return (
    <div className="row mt-5">
      {blogList.map((blog) => (
        <Blogitem blog={blog} key={blog.id}  />
      ))},
    </div>
  );
};

export default BlogList;
