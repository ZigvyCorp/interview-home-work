import { FETCH_POSTS_ERR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "../action/post.action";

const postReducer = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, posts: action.payload };
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case FETCH_POSTS_ERR:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
export default postReducer;
