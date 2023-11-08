import { createSelector } from "reselect";

export const checkLogin = (state) => state.userReducerInitState?.checkLogin;
export const userInfo = (state) => state.userReducerInitState.userInfo;
export const registeredUserInfomation = (state) =>
  state.userReducerInitState.registeredUserInfomation;
export const loadingLoginStudio = (state) =>
  state.userReducerInitState.loadingLoginStudio;
export const userInfoStudio = (state) =>
  state.userReducerInitState.userInfoStudio;
export const errorLoginStudio = (state) =>
  state.userReducerInitState.checkLogin;

export const usersRemainingSelector = createSelector(
  checkLogin,
  userInfo,
  registeredUserInfomation,
  loadingLoginStudio,
  userInfoStudio,
  errorLoginStudio,
  (
    checkLogin,
    userInfo,
    registeredUserInfomation,
    loadingLoginStudio,
    userInfoStudio,
    errorLoginStudio
  ) => {
    return {
      checkLogin,
      userInfo,
      registeredUserInfomation,
      loadingLoginStudio,
      userInfoStudio,
      errorLoginStudio,
    };
  }
);
