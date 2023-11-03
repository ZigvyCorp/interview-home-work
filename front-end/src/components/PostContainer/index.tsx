import React from "react";

import { Space, Spin, theme } from "antd";

import {
  getPostsErrorSelector,
  getPostsSelector,
  getPostsSizeSelector,
} from "../../store/posts/selectors";

import { useSelector } from "react-redux";
import Post from "../Post";

function PostContainer() {
  const posts = useSelector(getPostsSelector);
  const size = useSelector(getPostsSizeSelector);
  const error = useSelector(getPostsErrorSelector);
  const { token } = theme.useToken();

  if (error)
    return (
      <div
        style={{
          minHeight: token.screenXS,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Something went wrong</p>
      </div>
    );

  if (size === 0 && posts.length === 0) {
    return (
      <div
        style={{
          minHeight: token.screenXS,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin />
      </div>
    );
  }

  return (
    <Space direction="vertical">
      {posts.map((post, i) => {
        return <Post key={post._id} {...post} />;
      })}
    </Space>
  );
}

export default PostContainer;
