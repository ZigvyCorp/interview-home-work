import { userConsts } from "../constants";

export const loginAction = (payload) => {
  return {
    type: userConsts.LOGIN,
    payload,
  };
};

export const logoutAction = () => {
  return {
    type: userConsts.LOGOUT,
  };
};

export const registerActionRequest = (payload) => {
  return {
    type: userConsts.REGISTER_REQUEST,
    payload,
  };
};
export const registerActionSuccess = (payload) => {
  return {
    type: userConsts.REGISTER_SUCCESS,
    payload,
  };
};
export const registerActionFail = (payload) => {
  return {
    type: userConsts.REGISTER_FAILURE,
    payload,
  };
};
export const logoutActionStudio = () => {
  return {
    type: userConsts.LOGOUT_STUDIO,
  };
};

export const loginActionStudioRequest = (payload) => {
  return {
    type: userConsts.LOGIN_STUDIO_REQUEST,
    payload,
  };
};
export const loginActionStudioSuccess = (payload) => {
  return {
    type: userConsts.LOGIN_STUDIO_SUCCESS,
    payload,
  };
};
export const loginActionStudioFailure = (payload) => {
  return {
    type: userConsts.LOGIN_STUDIO_FAILURE,
    payload,
  };
};
