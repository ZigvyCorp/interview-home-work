import axios from "axios";
import * as actionTypes from "./actionType";

//Posts
export const fetchPostsSuccess = (results) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    results: results,
  };
};

export const fetchPosts = (page) => {
  return (dispatch) => {
    axios
      .get(`${actionTypes.API_URL}/posts?_page=${page}`)
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch((err) => console.log(err));
  };
};

//Comments
export const fetchCommentsSuccess = (results) => {
  return {
    type: actionTypes.FETCH_COMMENTS_SUCCESS,
    results: results,
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    axios
      .get(`${actionTypes.API_URL}/comments`)
      .then((response) => {
        dispatch(fetchCommentsSuccess(response.data));
      })
      .catch((err) => console.log(err));
  };
};

//Loaded post
export const fetchLoadedPostsSuccess = (results) => {
  return {
    type: actionTypes.FETCH_LOADED_POST,
    results: results,
  };
};

export const fetchLoadedPost = (id) => {
  return (dispatch) => {

    axios
      .get(`${actionTypes.API_URL}/posts/${id}`)
      .then((response) => {
        dispatch(fetchLoadedPostsSuccess(response.data));
      })
      .catch((err) => console.log(err));
  };
};

//Loaded comments
export const fetchLoadedCommentsSuccess = (results) => {
  return {
    type: actionTypes.FETCH_LOADED_CMTS,
    results: results,
  };
};

export const fetchLoadedComments = (id) => {
  return (dispatch) => {
    axios
      .get(`${actionTypes.API_URL}/comments?postId=${id}`)
      .then((response) => {
        dispatch(fetchLoadedCommentsSuccess(response.data));
      })
      .catch((err) => console.log(err));
  };
};
