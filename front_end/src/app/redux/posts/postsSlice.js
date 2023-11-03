import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'posts',
  storage,
};

const initialState = {
  posts: {},
  currentPost: null,
  isLoading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'POSTS_FETCH_REQUESTED':
      return {
        ...state,
        isLoading: true
      };
    case 'POSTS_FETCH_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        error: null,
      };
    case 'POSTS_FETCH_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case 'POST_FETCH_REQUESTED':
      return {
        ...state,
        isLoading: true
      };
    case 'POST_FETCH_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        currentPost: action.payload,
        error: null,
      };
    case 'POST_FETCH_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

const selectPosts = (state) => state.posts.posts;

const selectCurrentPost = (state) => state.posts.currentPost;

export { selectPosts, selectCurrentPost };

export default persistReducer(persistConfig, postsReducer);
