import { List, Skeleton } from "antd";
import { connect, useDispatch } from "react-redux";
import {
  loadPostsAction,
  loadCommentsAction,
} from "../store/actions/homeActions";
import { useEffect } from "react";
import PostPreview from "./PostPreview";

function PostList({ posts, loading, loadPostsAction }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsAction());
  }, []);

  // useEffect(() => {
  //   console.log({ props: posts });
  // }, [posts]);

  if (loading) {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  }
  const position = "bottom";
  const align = "center";
  return (
    <List
      pagination={{
        position,
        align,
      }}
      itemLayout="vertical"
      size="large"
      bordered
      dataSource={posts}
      renderItem={(item) => <PostPreview post={item} />}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.home.posts,
    loading: state.home.loading,
  };
};

export default connect(mapStateToProps, {
  loadPostsAction,
  loadCommentsAction,
})(PostList);
