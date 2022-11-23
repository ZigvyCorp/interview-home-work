import { createSelector } from "reselect";

const getPosts = (state: any) => state.post;

export function createPostsSelector() {
  return createSelector([getPosts], (state) => state.posts);
}
