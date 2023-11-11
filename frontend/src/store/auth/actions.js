import { GET_ME, GET_ME_FAILURE, GET_ME_SUCCESS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from "./actionTypes";

//login
export const login = (formData, navigate) => ({
    type: LOGIN,
    payload: { formData, navigate }
});

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

//register
export const register = (formData, navigate) => ({
    type: REGISTER,
    payload: { formData, navigate }
});

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS
});

export const registerFailure = (err) => ({
    type: REGISTER_FAILURE,
    payload: err
});

export const logout = () => ({
    type: LOGOUT
});

export const getMe = () => ({
    type: GET_ME
});

export const getMeSuccess = (user) => ({
    type: GET_ME_SUCCESS,
    payload: user
});

export const getMeFailure = () => ({
    type: GET_ME_FAILURE
});