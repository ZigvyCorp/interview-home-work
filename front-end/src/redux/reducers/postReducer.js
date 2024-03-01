import { SET_POSTS, SET_POST } from "../actions/postActions";

const initialState = {
  posts: [],
  post: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case SET_POST:
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
};

export default postReducer;
