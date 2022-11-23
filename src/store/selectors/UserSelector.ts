import { createSelector } from "reselect";

const getUsers = (state: any) => state.user;

export function createUsersSelector() {
  return createSelector([getUsers], (state) => state.users);
}
