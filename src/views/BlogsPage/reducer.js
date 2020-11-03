import { handleActions } from 'redux-actions';
import { types } from './actions';
import { chain } from 'lodash';

const initialState = {
  posts: [],
  filterValue: '',
  paginatedPosts: [],
  page: 1,
  limit: 3,
  comments: {},
  hasFetchAll: false,
};

const applyFilterAndPagination = (posts, filterValue, page, limit) => {
  return chain(posts)
    .filter((post) => post.title.includes(filterValue))
    .drop((page - 1) * limit)
    .take(limit)
    .value();
};

export function fetchPostsCompleted(state, action) {
  const { filterValue, page, limit } = state;
  return {
    ...state,
    posts: action.payload,
    paginatedPosts: applyFilterAndPagination(
      action.payload,
      filterValue,
      page,
      limit
    ),
  };
}

export function fetchCommentsCompleted(state, action) {
  const { payload } = action;
  return {
    ...state,
    comments: {
      ...state.comments,
      [payload.postId]: payload.comments,
    },
  };
}

export function loadMore(state, action) {
  const page = state.page + 1;
  const { filterValue, limit } = state;
  const postsToAdd = applyFilterAndPagination(
    state.posts,
    filterValue,
    page,
    limit
  );
  const currentPost = [...state.paginatedPosts];
  return {
    ...state,
    page,
    paginatedPosts: currentPost.concat(postsToAdd),
    hasFetchAll: postsToAdd.length === 0,
  };
}

export function searchPost(state, action) {
  const page = 1;
  const filterValue = action.payload;
  const { limit } = state;

  return {
    ...state,
    page,
    filterValue,
    hasFetchAll: false,
    paginatedPosts: applyFilterAndPagination(
      state.posts,
      filterValue,
      page,
      limit
    ),
  };
}

export default handleActions(
  {
    [types.FETCH_POSTS_COMPLETED]: fetchPostsCompleted,
    [types.FETCH_COMMENTS_COMPLETED]: fetchCommentsCompleted,
    [types.LOAD_MORE]: loadMore,
    [types.SEARCH_POST]: searchPost,
  },
  initialState
);
