import { GET_ALL_POSTS_SUCCESS, GET_POST_BY_ID_SUCCESS } from "./actions";

const initialState = {
  posts: [],
  post: undefined,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_SUCCESS:
      return { ...state, posts: action.posts };
    case GET_POST_BY_ID_SUCCESS:
      return { ...state, post: action.post };
    default:
      return state;
  }
};
