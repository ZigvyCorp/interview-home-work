import React from "react";

import { Space, Spin, theme } from "antd";

import {
  getPostsErrorSelector,
  getPostsSelector,
} from "../../store/posts/selectors";

import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "../../actions/posts";
import Post from "../Post";

function PostContainer() {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);
  const error = useSelector(getPostsErrorSelector);
  const { token } = theme.useToken();

  React.useEffect(() => {
    dispatch(getPostsRequest(1));
  }, [dispatch]);

  if (error) return <div>error</div>;

  return (
    <>
      {posts.length === 0 ? (
        <div
          style={{
            minHeight: token.screenXS,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <Space direction="vertical">
          {posts.map((post, i) => {
            return <Post key={post._id} {...post} />;
          })}
        </Space>
      )}
    </>
  );
}

export default PostContainer;
