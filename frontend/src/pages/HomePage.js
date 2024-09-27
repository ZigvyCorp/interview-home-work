/**
 * @file HomePage.js
 * @description This file contains the HomePage component which is responsible for fetching and displaying a list of posts.
 * 
 * @module HomePage
 * 
 * @requires react
 * @requires react-redux
 * @requires ../components/PostList
 * @requires ../redux/actions/postActions
 * 
 * @component
 * @example
 * return (
 *   <HomePage />
 * )
 * 
 * @returns {JSX.Element} The HomePage component which renders the PostList component with fetched posts.
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../components/PostList';
import { fetchPosts } from '../redux/actions/postActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return <PostList posts={posts} />;
};

export default HomePage;