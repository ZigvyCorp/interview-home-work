import { Divider, Empty, Row } from "antd";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import Container from "../../layouts/Container";
import { fetchPostsRequest, selectPosts } from "../../redux-saga/slices/posts.slice";
import { theme } from "../../styled/theme/globalTheme";

const HomePage = () => {
  const { posts, loading, error } = useSelector(selectPosts);
  const [visiblePosts, setVisiblePosts] = useState(10);
  const dispatch = useDispatch();

  const loadMore = () => {
    setVisiblePosts(visiblePosts + 10);
  };

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return (
    <InfiniteScroll
      dataLength={visiblePosts}
      next={loadMore}
      hasMore={visiblePosts < posts.length}
      loader={<div>Loading...</div>}
    >
      {posts ? (
        posts.slice(0, visiblePosts).map((post) => (
          <Row
            style={{
              position: "relative",
            }}
            key={post.id}
          >
            <Container>
              <PostCard {...post} />
            </Container>
            <Divider
              style={{
                borderBlockColor: theme.colors.black,
                borderBlockWidth: "3px",
              }}
            />
          </Row>
        ))
      ) : (
        <Empty />
      )}
    </InfiniteScroll>
  );
};

export default HomePage;
