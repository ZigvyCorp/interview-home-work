import { createSelector } from "reselect";

export const createPostSelector = createSelector(
  (state: any) => state.createPost,
  createPost => createPost
);
