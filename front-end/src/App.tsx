import React from "react";

import { Layout, ConfigProvider, theme, Flex } from "antd";
import "./App.css";
import BlogHeader from "./components/BlogHeader";
import PostContainer from "./components/PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "./actions/posts";
import {
  getPostsPendingSelector,
  getPostsSelector,
  getPostsSizeSelector,
} from "./store/posts/selectors";
import LoadMoreButton from "./components/LoadMoreButton";
import AddPostButton from "./components/AddPostButton";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);
  const pending = useSelector(getPostsPendingSelector);
  const size = useSelector(getPostsSizeSelector);
  const { token } = theme.useToken();

  React.useLayoutEffect(() => {
    dispatch(getPostsRequest(0));
  }, [dispatch]);

  React.useEffect(() => {
    if (posts.length === 0 && size > 0) dispatch(getPostsRequest(0));
  }, [dispatch, posts, size]);

  return (
    <ConfigProvider>
      <Layout
        style={{
          backgroundColor: "transparent",
          padding: "1rem 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          style={{
            maxWidth: token.screenLG,
          }}
          align="center"
          vertical
          gap={12}
        >
          <BlogHeader />

          <Layout
            style={{
              padding: "0px 50px",
              backgroundColor: "#fff",
            }}
          >
            {<PostContainer />}
          </Layout>

          <LoadMoreButton
            postLength={posts.length}
            size={size}
            pending={pending}
            onClick={() => dispatch(getPostsRequest(posts.length))}
          />
        </Flex>
      </Layout>

      <AddPostButton />
    </ConfigProvider>
  );
}

export default App;
