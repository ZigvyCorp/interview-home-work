import { FETCH_POSTS, TOGGLE_COMMENT } from '../reducers/postReducer';
export const SET_POSTS = 'SET_POSTS';

export const fetchPosts = () => ({
    type: FETCH_POSTS,
});

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
});

export const toggleComment = (postId) => ({
    type: TOGGLE_COMMENT,
    payload: postId,
});
