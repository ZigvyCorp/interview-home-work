import { Layout, List, Spin } from "antd";
import React from "react";
import { InView } from "react-intersection-observer";

import Post from "../components/Post";
import useInfinitePosts from "../react-queries/useInfinitePosts";

const { Content } = Layout;

const HomePage = () => {
  const {
    data: postsPages,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfinitePosts();

  const posts = React.useMemo(() => {
    return postsPages?.pages?.map((page) => page || []).flat();
  }, [postsPages?.pages]);
  return (
    <Layout>
      <Content>
        {posts && (
          <List
            itemLayout="vertical"
            dataSource={posts}
            renderItem={(post) => <Post post={post} />}
          />
        )}

        <InView onChange={(inView) => inView && fetchNextPage()}>
          {({ ref }) => <div ref={ref} style={{ height: "50px" }}></div>}
        </InView>
      </Content>
      {(isFetchingNextPage || isFetching) && (
        <div className="text-center">
          <Spin size="large" />
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
