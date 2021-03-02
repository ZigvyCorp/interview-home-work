import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from '../components/Post';
// import posts from '../components/Posts';

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('/api/posts');

      setPosts(data);
    };

    fetchPosts();
  });

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </>
  );
};

export default HomeScreen;
