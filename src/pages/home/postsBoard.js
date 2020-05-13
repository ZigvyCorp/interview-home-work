import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { useLocation, Link, Redirect } from "react-router-dom";

const CONTENT_SUMMARY_LIMIT = 100;
const MAX_PER_PAGE = Number(process.env.REACT_APP_MAX_PER_PAGE);

const generateTags = (tags) =>
  tags.map((tag) => (
    <span
      key={Math.random()}
      className="m-1 border border-dark rounded p-1 col-3 text-center"
    >
      {tag}
    </span>
  ));

const generateSummaryPosts = (blogPosts) => {
  return blogPosts.map((post) => (
    <Link key={Math.random()} to={`/post?id=${post._id}`}>
      <div className="p-4 border border-primary my-4">
        <p className="h2 text-center ">{post.title}</p>
        <div className="row p-2">
          <div className="column col-9">
            <p>
              <span>Author: </span> <span>{post.owner}</span>
            </p>
            <p>
              <span>Created at: </span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </p>
          </div>
          <div className="col-3 row align-items-start">
            {generateTags(post.tags)}
          </div>
          <div className="col-12">
            {post.content.substr(0, CONTENT_SUMMARY_LIMIT)}
          </div>
        </div>
      </div>
    </Link>
  ));
};

const PostsBoard = React.memo(({ posts = [] }) => {
  const query = new URLSearchParams(useLocation().search);

  const currentPage = Number(query.get("page")) || 0;
  const startPost = currentPage > 1 ? (currentPage - 1) * MAX_PER_PAGE : 0;
  const endPost = startPost + 5;

  const reducedPosts = posts.slice(startPost, endPost) || [];
  if (!reducedPosts.length) {
    return <Redirect to="/" />;
  }

  return (
    <div className="w-75 m-auto">{generateSummaryPosts(reducedPosts)}</div>
  );
});

export default PostsBoard;
