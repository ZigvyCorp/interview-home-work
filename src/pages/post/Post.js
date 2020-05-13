import React from "react";
import _ from "lodash";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PageWithNavBar from "../main/pageWithNavBar";

const Post = ({ posts }) => {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  let activePost;
  posts.some((post) => {
    if (post._id === id) {
      activePost = post;
      return true;
    }
    return false;
  });
  const { title, tags, owner, content } = activePost;
  const stringTag = tags.join(",") || "none";
  return (
    <div className="w-75 mx-auto">
      <p className="h2 text-center">{title}</p>
      <p className="h5 text-center">By: {owner}</p>
      <p className="">
        <i>Tags: {stringTag}</i>
      </p>
      <p className="">{content}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const posts = _.get(state, "blog.data.posts");
  return { posts };
};

export default connect(mapStateToProps)(PageWithNavBar(Post));
