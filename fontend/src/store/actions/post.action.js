import { apiGetPosts, apiGetPostsById } from "../../services/post.service";
import actionTypes from "./actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();
    if (response?.data.statusCode === 200) {
      dispatch({
        type: actionTypes.GET_POSTS,
        posts: response.data.data.data,
        count: response.data.data.count,
        loading: true,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      posts: null,
    });
  }
};
export const getPostsById = (id) => async (dispatch) => {
  try {
    const response = await apiGetPostsById(id);
    if (response?.data.statusCode === 200) {
      dispatch({
        type: actionTypes.GET_POSTS_BY_ID,
        post: response.data.data,
        loading: true,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_BY_ID,
        post: null,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      post: null,
    });
  }
};
