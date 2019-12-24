import { createSelector } from "reselect";

export const commentSelector = createSelector(
  (state: any) => state.comment,
  comment => comment
);
