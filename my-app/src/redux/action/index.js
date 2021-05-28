import * as Types from './actionType'

export const fetchPosts = () => ({
    type: Types.FETCH_POSTS,
});

export const fetchPostsSuccess = (data) => ({
    type: Types.FETCH_POSTS_SUCCESS,
    data
});

export const fetchPostsError = () => ({
    type: Types.FETCH_POSTS_ERROR,
});

export const fetchUsers = () => ({
    type: Types.FETCH_USERS,
});

export const fetchUsersSuccess = (data) => ({
    type: Types.FETCH_USERS_SUCCESS,
    data
});

export const fetchUsersError = () => ({
    type: Types.FETCH_USERS_ERROR,
});

export const fetchComments = () => ({
    type: Types.FETCH_COMMENTS,
});

export const fetchCommentsSuccess = (data) => ({
    type: Types.FETCH_COMMENTS_SUCCESS,
    data
});

export const fetchCommentsError = () => ({
    type: Types.FETCH_COMMENTS_ERROR,
});

export const fetchPostDetail = (idPost) => ({
    type: Types.FETCH_POST_DETAIL,
    idPost
});

export const fetchPostDetailSuccess = (postDetail, commentPost) => ({
    type: Types.FETCH_POST_DETAIL_SUCCESS,
    postDetail, commentPost
});

export const fetchPostDetailError = () => ({
    type: Types.FETCH_POST_DETAIL_ERROR,
});