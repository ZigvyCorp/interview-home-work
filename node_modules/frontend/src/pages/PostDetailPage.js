/**
 * @file PostDetailPage.js
 * @description This file contains the PostDetailPage component which is responsible for displaying the details of a specific post.
 * It fetches the post data from the Redux store and displays it using the Post component.
 * 
 * @module PostDetailPage
 * @requires react
 * @requires react-redux
 * @requires ../components/Post
 * @requires ../redux/actions/postActions
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { fetchPost } from '../redux/actions/postActions';

const PostDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);

  useEffect(() => {
    dispatch(fetchPost(match.params.id));
  }, [dispatch, match.params.id]);

  return post ? <Post post={post} /> : <p>Loading...</p>;
};

export default PostDetailPage;