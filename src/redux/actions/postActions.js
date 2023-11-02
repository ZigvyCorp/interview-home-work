import { FETCH_POSTS, SET_POSTS } from "../constants/actionTypes";

export const fetchPosts = () => ({
    type: FETCH_POSTS,
});

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
});
