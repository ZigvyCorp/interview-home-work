import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../components/Post';
import { getPosts } from '../actions/postActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      {posts.map((post) => (
        <div key={post._id}>
          <Post post={post} />
          <br />
        </div>
      ))}
    </>
  );
};

export default HomeScreen;
