import React from "react";

import { Empty, Space, Spin, theme } from "antd";

import {
  getPostsErrorSelector,
  getPostsFirstInitSelector,
  getPostsPendingSelector,
  getPostsSelector,
  getPostsSizeSelector,
} from "../../store/posts/selectors";

import { useSelector } from "react-redux";
import Post from "../Post";

function PostContainer({ isSearch }: { isSearch: boolean }) {
  const posts = useSelector(getPostsSelector);
  const pending = useSelector(getPostsPendingSelector);
  const firstInit = useSelector(getPostsFirstInitSelector);
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

  if (firstInit && size === 0 && posts.length === 0 && !pending) {
    return (
      <div
        style={{
          minHeight: token.screenXS,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Empty />
      </div>
    );
  }

  if (pending && isSearch)
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

  return (
    <Space direction="vertical">
      {posts.map((post, i) => {
        return <Post key={post._id} {...post} />;
      })}
    </Space>
  );
}

export default PostContainer;
