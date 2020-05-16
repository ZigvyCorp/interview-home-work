import { PostsContainer } from "@/components/posts-container";
import { Post } from "@/models/post";
import { FilterRequest } from "@/models/requests/filter-request";
import { AppState } from "@/redux";
import { PostActions } from "@/redux/post/actions";
import { Button, PageHeader } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const NewsFeed: React.FC<{
  posts: AppState["posts"];
}> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

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

  const loadPosts = (next: boolean = false) => {
    const filter = new FilterRequest();
    filter.page = next ? page + 1 : 0;
    filter.pageSize = 10;
    if (!next) setPosts([]);
    dispatch({
      type: PostActions.GET_POSTS,
      filter,
    });
  };

  const onDelete = (index: number) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  const onUpdated = (index: number, post: Post) => {
    const newPosts = [...posts];
    newPosts[index] = post;
    setPosts(newPosts);
  };

  const onCommentsUpdated = (index: number, post: Post) => {
    const newPosts = [...posts];
    const updatingPost = newPosts[index];
    newPosts[index] = {
      ...updatingPost,
      comments: post.comments || [],
    };
    setPosts(newPosts);
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
      <PostsContainer
        posts={posts}
        loadPosts={loadPosts}
        loading={loading}
        onDelete={onDelete}
        onUpdated={onUpdated}
        onCommentsUpdated={onCommentsUpdated}
        total={total}
      />
    </PageHeader>
  );
};

const mapStateToProps = (state: AppState) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(NewsFeed);
