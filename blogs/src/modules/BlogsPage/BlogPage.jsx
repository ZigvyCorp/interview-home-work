import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "@redux/actions/postActions";
import { fetchComments } from "@redux/actions/commentsActions"
import { List, Typography } from "antd"; 
import CommentsList from "./CommentList";

const BlogPage = () => {
  const dispatch = useDispatch();
  const {
    posts,
    loading: loadingPosts,
    error: errorPosts,
  } = useSelector((state) => state.posts);
  const {
    loading: loadingComment,
    comments,
    error: errorComments,
  } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchPostsRequest());
    dispatch(fetchComments());
  }, [dispatch]);

  if (loadingPosts || loadingComment) {
    return <div>Loading...</div>;
  }

  if (errorPosts || errorComments) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Typography.Title level={2}>Blog Posts</Typography.Title>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={posts}
        renderItem={(post) => (
          <List.Item
            key={post.id}
          >
            <List.Item.Meta
              title={<a href={`/posts/${post.id}`}>{post.title}</a>}
              description={post.body}
            />
            <CommentsList postId={post.id} comments={comments}/>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogPage;
