import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./actionTypes";

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get("http://localhost:3001/api/posts");
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
