import React from "react";

import { Layout, ConfigProvider, theme, Flex } from "antd";
import "./App.css";
import BlogHeader from "./components/BlogHeader";
import PostContainer from "./components/PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest, searchPostsRequest } from "./actions/posts";
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
  const [search, setSearch] = React.useState<string>("");
  const { token } = theme.useToken();

  React.useLayoutEffect(() => {
    dispatch(getPostsRequest(0));
  }, [dispatch]);

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
          <BlogHeader search={search} setSearch={setSearch} />

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
            onClick={() => {
              if (search.length > 0)
                dispatch(searchPostsRequest(posts.length, search));
              else dispatch(getPostsRequest(posts.length));
            }}
          />
        </Flex>
      </Layout>

      <AddPostButton />
    </ConfigProvider>
  );
}

export default App;
