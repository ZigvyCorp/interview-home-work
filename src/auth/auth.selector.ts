import { createSelector } from "reselect";
export const authSelector = createSelector(
  (state: any) => state.auth,
  auth => auth
);
