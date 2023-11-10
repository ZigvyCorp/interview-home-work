// reducers.js
// import { SET_POSTS, SET_USERS } from './actionTypes';
import { SET_POSTS,SET_USERS,SET_COMMENTS,SEARCH_POSTS } from "../actions/actionTypes";
const postsReducer = (state = [], action) => {
  if (action.type === SET_POSTS) {
    return action.payload || state;
  }
  return state;
};
const usersReducer = (state = {}, action) => {
  if (action.type === SET_USERS) {
    return action.payload || state;;
  }
  return state;
};
const initialState = {
  byPostId: {},
  loading: false,
  error: null,
};
const commentsReducer = (state = initialState, action) => {
  if (action.type === SET_COMMENTS) {
    const { postId, comments } = action.payload;
    return {
      ...state,
      byPostId: {
        ...state.byPostId,
        [postId]: comments,
      },
      loading: false,
      error: null,
    }
  }
  return state;
};

const postsIsSearchReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.payload || state;
    case SEARCH_POSTS:
      const searchTerm = action.payload.toLowerCase();
      // Lọc danh sách bài post dựa trên tiêu đề
      return state.filter(post => post.title.toLowerCase().includes(searchTerm));
    default:
      return state;
  }
};
const testReducer = (state = {}, action) => {
  if (action.type == 'TEST') {
    return action.payload;
  }
  return state;
};
export { postsReducer, usersReducer, commentsReducer,postsIsSearchReducer, testReducer };
