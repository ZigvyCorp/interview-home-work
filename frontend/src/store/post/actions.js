import { CLOSE_MODAL, CREATE_POST, CREATE_POST_SUCCESS, GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS, LOAD_MORE_POST, OPEN_MODAL } from "./actionTypes";

export const getPosts = ({ currentPage, perPage }) => ({
    type: GET_POSTS,
    payload: {
        currentPage,
        perPage
    }
});

export const getPostSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts
});

export const getPostFailure = () => ({
    type: GET_POSTS_FAILURE
});

export const openModal = () => ({
    type: OPEN_MODAL
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});

export const createPost = (formData) => ({
    type: CREATE_POST,
    payload: formData
});

export const createPostSuccess = (post) => ({
    type: CREATE_POST_SUCCESS,
    payload: post
});

export const loadMorePost = () => ({
    type: LOAD_MORE_POST
});