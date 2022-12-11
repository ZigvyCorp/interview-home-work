import * as actions from '../actions/post-actions';
import { POSTS_PER_PAGE } from '../pagination-constants';

export function checkHasNextPage(
  currentPage,
  postsPerPage,
  totalPosts
) {
  return postsPerPage * currentPage <= totalPosts;
}

const initialState = {
  //Basically items = posts, but since posts.posts is kinda confusing, I decided to go with 'items'
  isFetching: false,
  hasError: false,
  hasNextPage: true,
  items: [],
  nextItems: [],
  currentPage: 0,
  totalPosts: 0,
  matchingItems: []
};

function postReducer(state = initialState, action) {
  let hasNextPage;
  if (
    action.type === actions.GET_POSTS_SUCCESS ||
    action.type === actions.GET_NEXT_POSTS_SUCCESS
  ) {
    hasNextPage = checkHasNextPage(
      POSTS_PER_PAGE,
      state.currentPage,
      action.totalPosts
    );
  }

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
          hasNextPage: false,
          totalPosts: action.totalPosts
        };
      }
      return {
        ...state,
        isFetching: false,
        hasError: false,
        hasNextPage: true,
        items: [...state.items, ...action.posts],
        currentPage: state.currentPage + 1,
        totalPosts: action.totalPosts
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
          hasNextPage: false,
          totalPosts: action.totalPosts
        };
      }

      return {
        ...state,
        isFetching: false,
        hasError: false,
        nextItems: action.posts,
        currentPage: state.currentPage + 1,
        totalPosts: action.totalPosts
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

    case actions.GET_MATCHING_POSTS:
      return {
        ...state,
        isFetching: true,
        hasError: false
      };

    case actions.GET_MATCHING_POSTS_SUCCESS:
      return {
        ...state,
        matchingItems: [...action.matchingPosts],
        isFetching: false,
        hasError: false
      };

    case actions.GET_MATCHING_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true
      };
    default:
      return state;
  }
}

export default postReducer;
