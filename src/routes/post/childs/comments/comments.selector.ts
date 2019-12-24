import { createSelector } from "reselect";

export const commentsSelector = createSelector(
  (state: any) => state.comments,
  comments => comments
);
