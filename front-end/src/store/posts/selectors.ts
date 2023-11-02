import { createSelector } from "reselect";
import { AppState } from "../../reducers";

const getPending = (state: AppState) => state.post.pending;

const getPosts = (state: AppState) => state.post.posts;

const getError = (state: AppState) => state.post.error;

export const getPostsSelector = createSelector(getPosts, (posts) => {
  console.log(posts);
  return posts;
});

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
