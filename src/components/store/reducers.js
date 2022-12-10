import * as actions from './actions';
import { POSTS_PER_PAGE, TOTAL_POSTS } from './pagination-constants';

export function checkHasNextPage(
  currentPage,
  postsPerPage,
  totalPosts
) {
  return postsPerPage * currentPage <= totalPosts;
}

const initialState = {
  isFetching: true,
  hasError: false,
  hasNextPage: true,
  items: [],
  nextItems: [],
  currentPage: 0
};

function postsReducer(state = initialState, action) {
  const hasNextPage = checkHasNextPage(
    POSTS_PER_PAGE,
    state.currentPage,
    TOTAL_POSTS
  );
  switch (action.type) {
    case actions.GET_POSTS:
      return {
        ...state,
        isFetching: true,
        hasError: false
      };
    case actions.GET_POSTS_SUCCESS:
      if (!hasNextPage) {
        return {
          ...state,
          isFetching: false,
          hasError: false,
          hasNextPage: false
        };
      }
      return {
        ...state,
        isFetching: false,
        hasError: false,
        hasNextPage: true,
        items: [...state.items, ...action.posts],
        currentPage: state.currentPage + 1
      };
    case actions.GET_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true
      };
    case actions.GET_NEXT_POSTS_SUCCESS:
      if (!hasNextPage) {
        return {
          ...state,
          isFetching: false,
          hasError: false,
          hasNextPage: false
        };
      }

      return {
        ...state,
        isFetching: false,
        hasError: false,
        nextItems: action.posts,
        currentPage: state.currentPage + 1
      };
    case actions.GET_NEXT_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true
      };
    case actions.ADD_NEXT_POSTS:
      return {
        ...state,
        items: [...state.items, ...state.nextItems],
        nextItems: []
      };
    default:
      return state;
  }
}

export default postsReducer;
