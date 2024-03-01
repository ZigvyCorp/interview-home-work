import { GET_COMMENTS_ERROR, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionTypes/actionTypes";

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