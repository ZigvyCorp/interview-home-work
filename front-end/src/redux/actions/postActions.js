export const FETCH_POSTS = "FETCH_POSTS";
export const SEARCH_POSTS = "SEARCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const SET_POSTS = "SET_POSTS";
export const SET_POST = "SET_POST";

export const fetchPosts = (page) => ({ type: FETCH_POSTS, page });
export const fetchPost = (id) => ({ type: FETCH_POST, id });
export const searchPosts = (title) => ({ type: SEARCH_POSTS, title });
export const setPosts = (posts) => ({ type: SET_POSTS, posts });
export const setPost = (post) => ({ type: SET_POST, post });
