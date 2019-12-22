import * as actionTypes from "./actionTypes";

export const createNewPost = (postData) => ({
  type: actionTypes.CREATE_NEW_POST,
  postData
})

export const createNewPostStart = () => ({ 
  type: actionTypes.CREATE_NEW_POST_START
})

export const createNewPostSuccess = () => ({
  type: actionTypes.CREATE_NEW_POST_SUCCESS,
})

export const createNewPostFail = (error) => ({
  type: actionTypes.CREATE_NEW_POST_FAIL,
  error
})

export const clearRedirect = (error) => ({
  type: actionTypes.CREATE_NEW_POST_CLEAR_REDIRECT,
  error
})