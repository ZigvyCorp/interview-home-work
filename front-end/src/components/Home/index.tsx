import React from "react";

import { Layout, theme, Flex } from "antd";
import BlogHeader from "../../components/BlogHeader";
import PostContainer from "../../components/PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { searchPostsRequest } from "../../actions/posts";
import {
  getPostsPendingSelector,
  getPostsSelector,
  getPostsSizeSelector,
} from "../../store/posts/selectors";
import LoadMoreButton from "../../components/LoadMoreButton";
import AddPostButton from "../../components/AddPostButton";
import { IsSearchContext } from "../../contexts/IsSearch";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector);
  const pending = useSelector(getPostsPendingSelector);
  const size = useSelector(getPostsSizeSelector);
  const [search, setSearch] = React.useState<string>("");
  const { token } = theme.useToken();
  const isSearch = React.useRef<boolean>(false);

  React.useEffect(() => {
    isSearch.current = true;
  }, [search]);

  React.useLayoutEffect(() => {
    dispatch(searchPostsRequest(0, ""));
  }, [dispatch]);
  return (
    <IsSearchContext.Provider value={isSearch}>
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
            {<PostContainer isSearch={isSearch.current} />}
          </Layout>

          <LoadMoreButton
            postLength={posts.length}
            size={size}
            pending={pending}
            onClick={() => {
              dispatch(searchPostsRequest(posts.length, search));
              isSearch.current = false;
            }}
          />
        </Flex>
      </Layout>

      <AddPostButton />
    </IsSearchContext.Provider>
  );
}

export default Home;
