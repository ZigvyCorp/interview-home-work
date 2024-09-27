/**
 * @file postActions.js
 * @description This file contains action type constants for post-related actions in the Redux store.
 * @module redux/actions/postActions
 */
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const fetchPost = (id) => ({
  type: FETCH_POST,
  payload: id,
});