// actions.js
// import { type } from "@testing-library/user-event/dist/type";
import { SEARCH_POSTS,  API_ERROR, GET_API_COMMENTS, GET_API_POSTS, GET_API_USERS, SET_COMMENTS, SET_POSTS,SET_USERS } from "./actionTypes";
export const getPost=()=>({type: GET_API_POSTS})
export const getUser=()=>({type: GET_API_USERS})
export const getComment=(postId)=>({type: GET_API_COMMENTS,payload:postId})

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    payload: posts,
  };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users,
    };
};

export const setComments = (comments, postId) => {
    return {
      type: SET_COMMENTS,
      payload: { comments,postId} ,
    };
  };

export const searchPosts = (title) => ({
  type: SEARCH_POSTS,
  payload: title,
});

export const apiError = (error)=>({ type:API_ERROR,error })