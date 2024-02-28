import React, { useEffect, useState } from "react";
import apiService from "../services/api";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await apiService.getPostsAuthor();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="h2 text-center">Post List</div>
      {posts.map((post) => (
        <div className="card mb-3" key={post.id}>
          <div className="card-body">
            <h3 className="card-title">{post.author}</h3>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
