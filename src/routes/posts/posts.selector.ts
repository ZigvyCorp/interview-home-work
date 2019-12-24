import { createSelector } from "reselect";

export const postsSelector = createSelector(
  (state: any) => state.posts,
  posts => posts
);
