import {
  GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
  GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE,
  GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE,
  GET_POST_DETAILS_REQUEST, GET_POST_DETAILS_SUCCESS, GET_POST_DETAILS_FAILURE
} from './actions';

export const INITIAL_STATE = {
  posts: [],
  comments: [],
  users: [],
  postDetails: null,
  loading: false,
  error: null,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case GET_POSTS_REQUEST:
      case GET_COMMENTS_REQUEST:
      case GET_USERS_REQUEST:
      case GET_POST_DETAILS_REQUEST:
          return {
              ...state,
              loading: true,
              error: null,
          };
      
      case GET_POSTS_SUCCESS:
          return {
              ...state,
              loading: false,
              posts: action.payload,             
          };

          

      case GET_COMMENTS_SUCCESS:
          return {
              ...state,
              loading: false,
              comments: action.payload,
          };

      case GET_USERS_SUCCESS:
          return {
              ...state,
              loading: false,
              users: action.payload,
          };

      case GET_POST_DETAILS_SUCCESS:
          return {
              ...state,
              loading: false,
              postDetails: action.payload,
          };

      case GET_POSTS_FAILURE:
      case GET_COMMENTS_FAILURE:
      case GET_USERS_FAILURE:
      case GET_POST_DETAILS_FAILURE:
          return {
              ...state,
              loading: false,
              error: action.payload,
          };

      default:
          return state;
  }
};
export default rootReducer;
