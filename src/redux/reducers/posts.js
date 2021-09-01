import { handleGetPosts } from "../sagas/handles/posts";

export const GET_POSTS = "GET_POSTS";
const SET_POSTS = "SET_POSTS";

export const getPosts = () => ({
  type: GET_POSTS
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  posts
});

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      const { posts } = action;
      return { ...state, posts };
    default:
      return state;
  }
};