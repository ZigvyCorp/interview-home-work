import * as actionTypes from "./actionTypes";

export const signUp = (userData) => ({
  type: actionTypes.SIGNUP,
  userData
})

export const signUpStart = () => ({ 
  type: actionTypes.SIGNUP_START
})

export const signUpSuccess = (userData, token) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  userData,
  token
})

export const signUpFail = (error) => ({
  type: actionTypes.SIGNUP_FAIL,
  error
})

export const login = (userData) => ({
  type: actionTypes.LOGIN,
  userData
})

export const loginStart = () => ({ 
  type: actionTypes.LOGIN_START
})

export const loginSuccess = (userData, token) => ({
  type: actionTypes.LOGIN_SUCCESS,
  userData,
  token
})

export const loginFail = (error) => ({
  type: actionTypes.LOGIN_FAIL,
  error
})

export const logout = () => ({
  type: actionTypes.LOGOUT
})

export const logoutStart = () => ({ 
  type: actionTypes.LOGOUT_START
})

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
})

export const logoutFail = (error) => ({
  type: actionTypes.LOGOUT_FAIL,
  error
})

export const checkMe = () => ({
  type: actionTypes.CHECK_ME,
})

export const checkMeStart = () => ({ 
  type: actionTypes.CHECK_ME_START
})

export const checkMeSuccess = (userData, token) => ({
  type: actionTypes.CHECK_ME_SUCCESS,
  userData,
  token
})

export const checkMeFail = (error) => ({
  type: actionTypes.CHECK_ME_FAIL,
  error
})