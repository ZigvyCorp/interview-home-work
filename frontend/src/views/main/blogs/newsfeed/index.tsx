import { InfiniteScrollContainer } from "@/components/infinite-scroll";
import { Post } from "@/models/post";
import { FilterRequest } from "@/models/requests/filter-request";
import { AppState } from "@/redux";
import { PostActions } from "@/redux/post/actions";
import { Button, PageHeader } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { renderPostPreview } from "./Post";

const NewsFeed: React.FC<{
  posts: AppState["posts"];
}> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(false);
  const isFirstRender = useRef(true);
  const {
    posts: {
      data,
      metadata: { page, total },
      loading,
    },
  } = props;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setPosts([...posts, ...data]);
  }, [data]);

  useEffect(() => {
    setHasMore(posts.length < total);
  }, [posts.length, total]);

  const loadPosts = (next: boolean = false) => {
    const filter = new FilterRequest();
    filter.page = next ? page + 1 : 0;
    filter.pageSize = 10;
    dispatch({
      type: PostActions.GET_POSTS,
      filter,
    });
  };

  return (
    <PageHeader
      title="Newsfeed"
      extra={[
        <Button
          key="0"
          type="primary"
          onClick={() => history.push("/blogs/new")}
        >
          Create post
        </Button>,
      ]}
    >
      <InfiniteScrollContainer<Post>
        data={posts}
        itemRenderer={renderPostPreview}
        loadMore={loadPosts}
        loading={loading}
        hasMore={hasMore}
      />
    </PageHeader>
  );
};

const mapStateToProps = (state: AppState) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(NewsFeed);
