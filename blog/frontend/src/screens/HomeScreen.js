import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from '../components/Post';

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('/api/posts');

      setPosts(data);

      console.log(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div key={post._id}>
          <Post post={post} />
        </div>
      ))}
    </>
  );
};

export default HomeScreen;
