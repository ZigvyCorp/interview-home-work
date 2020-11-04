import { handleActions } from 'redux-actions';
import { types } from './actions';
import { chain } from 'lodash';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  posts: [],
  filterValue: '',
  paginatedPosts: [],
  page: 1,
  limit: 3,
  comments: {},
  users: {},
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
  const filter = applyFilterAndPagination(
    action.payload,
    filterValue,
    page,
    limit
  );
  return {
    ...state,
    posts: action.payload,
    paginatedPosts: filter,
  };
}

export function fetchUsersCompleted(state, action) {
  const groupUserById = action.payload.reduce(
    (acc, user) => ({ ...acc, [user.id]: user }),
    {}
  );
  return {
    ...state,
    users: groupUserById,
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
  const nextPage = state.page + 1;
  const { filterValue, limit } = state;
  const postsToAdd = applyFilterAndPagination(
    state.posts,
    filterValue,
    nextPage,
    limit
  );
  const currentPost = [...state.paginatedPosts];
  return {
    ...state,
    page: postsToAdd.length === 0 ? state.page : nextPage,
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

const blogsReducer = handleActions(
  {
    [types.FETCH_POSTS_COMPLETED]: fetchPostsCompleted,
    [types.FETCH_COMMENTS_COMPLETED]: fetchCommentsCompleted,
    [types.FETCH_USERS_COMPLETED]: fetchUsersCompleted,
    [types.LOAD_MORE]: loadMore,
    [types.SEARCH_POST]: searchPost,
  },
  initialState
);

const persistConfig = {
  key: 'blogs',
  storage: storage,
  blacklist: ['filterValue', 'page', 'hasFetchAll', 'paginatedPosts'],
};

export default persistReducer(persistConfig, blogsReducer);
