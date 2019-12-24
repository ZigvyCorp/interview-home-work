import { createSelector } from "reselect";

export const postsSelector = createSelector(
  (state: any) => state.profile.posts,
  posts => posts
);
