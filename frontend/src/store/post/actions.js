import { CLOSE_MODAL, CREATE_POST, CREATE_POST_SUCCESS, FETCH_POST, GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS, INCREASE_COMMENT_COUNT, LOAD_MORE_POST, OPEN_MODAL } from "./actionTypes";

export const getPosts = ({ currentPage, perPage, ...restParams }) => ({
    type: GET_POSTS,
    payload: {
        currentPage,
        perPage,
        ...restParams
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

export const fetchingPost = () => ({
    type: FETCH_POST
});

export const loadMorePost = () => ({
    type: LOAD_MORE_POST
});

export const increaseCommentCount = (postId) => ({
    type: INCREASE_COMMENT_COUNT,
    payload: postId
});