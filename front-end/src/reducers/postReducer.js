import {
  GET_POSTS_SUCCESS,
  GET_POST_DETAIL_FETCH,
  GET_POST_DETAIL_SUCCESS,
} from "../actions";

const postReducer = (
  state = { posts: [], postDetail: {}, isLoading: false },
  action
) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return { ...state, posts: action.posts };

    case GET_POST_DETAIL_FETCH:
      return { ...state, isLoading: false };

    case GET_POST_DETAIL_SUCCESS:
      return { ...state, postDetail: action.postDetail, isLoading: true };
    default:
      return state;
  }
};

export default postReducer;
