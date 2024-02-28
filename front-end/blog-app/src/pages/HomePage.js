import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/postsAction";

import PostItem from "../components/PostItem";

const HomePage = ({ posts, loading, error, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Home Page - List of Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error,
});

export default connect(mapStateToProps, { fetchPosts })(HomePage);
