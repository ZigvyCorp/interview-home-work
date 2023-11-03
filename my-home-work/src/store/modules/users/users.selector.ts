import { createSelector } from "reselect";

import { IState } from "../../constant.store";
import { IUserState } from "./users.constant";

export const userListSelector = (state: IState) => {
  return state.users;
};

export const userLoadingSelector = createSelector(
  userListSelector,
  (users: IUserState) => users.loading
);
export const userErrorSelector = createSelector(
  userListSelector,
  (users: IUserState) => users.error
);

export const usersSelector = createSelector(
  userListSelector,
  (users: IUserState) => {
    return users.data;
  }
);
