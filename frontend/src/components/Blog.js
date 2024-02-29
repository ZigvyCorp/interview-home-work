import React from "react";

import "../styles/blog.css";
import { useNavigate } from "react-router-dom";

import CollapseComments from "./CollapseComments";

const Blog = (props) => {
  const navigate = useNavigate();
  const { idBlog, item } = props;

  const handleNavigateBlogDetail = () => {
    navigate(`/blog-detail/${idBlog}`);
  };

  const fullDate = item?.created_at;
  const datePart = fullDate.split("T")[0];

  return (
    <section className="blog-wrapper">
      <h2 onClick={handleNavigateBlogDetail} className="text-center">
        {item?.title}
      </h2>
      <div onClick={handleNavigateBlogDetail}>
        <div className="mb-4">
          <p className="blog-text">Author: {item?.owner?.username}</p>
          <p className="blog-text">Created at: {datePart}</p>
        </div>
        <div className="mb-4">
          <p className="blog-text">{item?.content}</p>
        </div>
      </div>

      <CollapseComments idBlog={idBlog} />
    </section>
  );
};

export default Blog;
