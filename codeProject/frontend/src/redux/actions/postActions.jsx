// src/redux/actions/postActions.js

import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from "../constants/postConstants";

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    try {
      const response = await axios.get("http://localhost:3000/posts");
      const posts = response.data;
      console.log(posts);
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST });

    try {
      const response = await axios.post("/api/posts", post);
      const createdPost = response.data;

      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: createdPost,
      });
    } catch (error) {
      dispatch({
        type: CREATE_POST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const updatePost = (postId, updatedPost) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_POST_REQUEST });

    try {
      const response = await axios.put(`/api/posts/${postId}`, updatedPost);
      const updatedPostData = response.data;

      dispatch({
        type: UPDATE_POST_SUCCESS,
        payload: updatedPostData,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_POST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST });

    try {
      await axios.delete(`/api/posts/${postId}`);

      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: postId,
      });
    } catch (error) {
      dispatch({
        type: DELETE_POST_FAILURE,
        payload: error.message,
      });
    }
  };
};
