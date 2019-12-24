import { createSelector } from "reselect";

export const postSelector = createSelector(
  (state: any) => state.post,
  post => post
);
