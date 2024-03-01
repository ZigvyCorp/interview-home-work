import { CREATE_COMMENT_ERROR, CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, CREATE_POST_ERROR, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_COMMENTS_ERROR, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionTypes/actionTypes";

// handle post request
export const getPostsRequest = (params) => ({
    type: GET_POSTS_REQUEST,
    payload: params
})
export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts
})
export const getPostsError = (error) => ({
    type: GET_POSTS_ERROR,
    payload: error
})
export const createPostRequest = (data) => ({
    type: CREATE_POST_REQUEST,
    payload: data
})
export const createPostSuccess = (post) => ({
    type: CREATE_POST_SUCCESS,
    payload: post
})
export const createPostError = (error) => ({
    type: CREATE_POST_ERROR,
    payload: error
})

// Handle comment request
export const getCommentsRequest = (params) => ({
    type: GET_COMMENTS_REQUEST,
    payload: params
})
export const getCommentsSuccess = (comments) => ({
    type: GET_COMMENTS_SUCCESS,
    payload: comments
})
export const getCommentsError = (error) => ({
    type: GET_COMMENTS_ERROR,
    payload: error
})
export const createCommentRequest = (data) => ({
    type: CREATE_COMMENT_REQUEST,
    payload: data
})
export const createCommentSuccess = (comments) => ({
    type: CREATE_COMMENT_SUCCESS,
    payload: comments
})
export const createCommentError = (error) => ({
    type: CREATE_COMMENT_ERROR,
    payload: error
})

// Handle login signup request
export const loginRequest = (userData) => ({
    type: LOGIN_REQUEST,
    payload: userData,
});

export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData,
})

export const loginFailure = (error) => ({
    type: LOGIN_ERROR,
    payload: error,
})
export const signupRequest = (userData) => ({
    type: SIGNUP_REQUEST,
    payload: userData,
});
export const signupSuccess = (userData) => ({
    type: SIGNUP_SUCCESS,
    payload: userData,
})

export const signupFailure = (error) => ({
    type: SIGNUP_ERROR,
    payload: error,
})
export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
})