import { createSelector } from "reselect";

export const signinSelector = createSelector(
  (state: any) => state.signin,
  signin => signin
);
