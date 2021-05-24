import {
    FETCH_ALL_POSTS,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_FAILURE,
    CREATE_POST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
} from './types';

export const fetchAllPosts = () => ({
    type: FETCH_ALL_POSTS
});

export const fetchAllPostsSuccess = (data) => ({
    type: FETCH_ALL_POSTS_SUCCESS, 
    payload: data
});

export const fetchAllPostsFailure = (error) => ({
    type: FETCH_ALL_POSTS_FAILURE, 
    payload: error
});

export const createPost = (data) => ({
    type: CREATE_POST,
    payload: data
});

export const createPostSuccess = (data) => ({
    type: CREATE_POST_SUCCESS, 
    payload: data
});

export const createPostFailure = (error) => ({
    type: CREATE_POST_FAILURE, 
    payload: error
});

export const fetchPost = (id) => ({
    type: FETCH_POST,
    payload: id
});

export const fetchPostSuccess = (data) => ({
    type: FETCH_POST_SUCCESS,
    payload: data
});

export const fetchPostFailure = (error) => ({
    type: FETCH_POST_FAILURE,
    payload: error
});