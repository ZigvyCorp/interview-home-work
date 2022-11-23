import { createSelector } from "reselect";

const getComments = (state: any) => state.comment;

export function createCommentsSelector() {
  return createSelector([getComments], (state) =>
    state.comments
  );
}
