import { combineReducers } from "redux";
import {
  SET_POSTS,
  SET_SELECTED_POST,
  SET_LOADING,
  SET_USERS,
  SET_SEARCH_TERM,
  SET_COMMENTS
} from "./actions";

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.searchText
    default:
      return state;
  }
};

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    default:
      return state;
  }
};

const selectedPostReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_POST:
      return action.post;
    default:
      return state;
  }
};

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.loading;
    default:
      return state;
  }
};

const usersReducers = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
};


const commentsReducers = (state = [], action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};

const savePostId = (state = '', action) => {
  switch (action.type) {
    case 'SAVE_POST_ID':
      return {
        ...state,
        postId: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
  selectedPost: selectedPostReducer,
  loading: loadingReducer,
  users: usersReducers,
  searchText: searchReducer,
  comments: commentsReducers,
  postId: savePostId,
});

export default rootReducer;
