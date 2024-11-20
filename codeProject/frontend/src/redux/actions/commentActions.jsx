import axios from "axios";
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from "../constants/commentConstants";

export const fetchComments = (postId) => {
  console.log("Fetching comments", postId);
  return async (dispatch) => {
    dispatch({ type: FETCH_COMMENTS_REQUEST });

    try {
      const response = await axios.get(
        `http://localhost:3000/comments/post/${postId}`
      );
      const comments = response.data;
      console.log("comments123", comments);
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments,
      });
    } catch (error) {
      dispatch({
        type: FETCH_COMMENTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const createComment = (postId, comment) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });

    try {
      const response = await axios.post(
        `/api/posts/${postId}/comments`,
        comment
      );
      const createdComment = response.data;

      dispatch({
        type: CREATE_COMMENT_SUCCESS,
        payload: createdComment,
      });
    } catch (error) {
      dispatch({
        type: CREATE_COMMENT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const updateComment = (postId, commentId, updatedComment) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_COMMENT_REQUEST });

    try {
      const response = await axios.put(
        `/api/posts/${postId}/comments/${commentId}`,
        updatedComment
      );
      const updatedCommentData = response.data;

      dispatch({
        type: UPDATE_COMMENT_SUCCESS,
        payload: updatedCommentData,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_COMMENT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const deleteComment = (postId, commentId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_COMMENT_REQUEST });

    try {
      await axios.delete(`/api/posts/${postId}/comments/${commentId}`);

      dispatch({
        type: DELETE_COMMENT_SUCCESS,
        payload: commentId,
      });
    } catch (error) {
      dispatch({
        type: DELETE_COMMENT_FAILURE,
        payload: error.message,
      });
    }
  };
};
