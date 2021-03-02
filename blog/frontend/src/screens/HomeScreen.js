import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../components/Post';
import { getPosts } from '../actions/postActions';
import { getUsers } from '../actions/userActions';
import { getComments } from '../actions/commentActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
    dispatch(getComments());
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
