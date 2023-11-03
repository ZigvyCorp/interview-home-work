import { createSelector } from "reselect";
import { AppState } from "../../reducers";

const getPending = (state: AppState) => state.posts.pending;

const getSize = (state: AppState) => state.posts.size;

const getPosts = (state: AppState) => state.posts.posts;

const getError = (state: AppState) => state.posts.error;

const getIsSearch = (state: AppState) => state.posts.isSearch;

export const getPostsSelector = createSelector(getPosts, (posts) => posts);

export const getPostsPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getPostsErrorSelector = createSelector(getError, (error) => error);

export const getPostsSizeSelector = createSelector(getSize, (size) => size);

export const getPostsIsSearchSelector = createSelector(
  getIsSearch,
  (isSearch) => isSearch
);
