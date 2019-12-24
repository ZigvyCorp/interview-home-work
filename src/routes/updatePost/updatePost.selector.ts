import { createSelector } from "reselect";

export const updatePostSelector = createSelector(
  (state: any) => state.updatePost,
  updatePost => updatePost
);
