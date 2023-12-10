import { Login, User } from "../../types/User/types"
import { GET_CURRENT_USER, GET_CURRENT_USER_FAILURE, GET_CURRENT_USER_SUCCESS, GET_SUGGEST_USER, GET_SUGGEST_USER_FAILURE, GET_SUGGEST_USER_SUCCESS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./actions"

export const getSuggestUser = () => ({
    type: GET_SUGGEST_USER
})

export const getSuggestUserSuccess = (user: User[]) => ({
    type: GET_SUGGEST_USER_SUCCESS,
    payload: user
})

export const getSuggestUserFailure = () => ({
    type: GET_SUGGEST_USER_FAILURE
})

export const login = (body: Login) => ({
    type: LOGIN,
    payload: body
})

export const loginSuccess = (token: string) => ({
    type: LOGIN_SUCCESS,
    payload: token
})

export const loginFailure = () => ({
    type: LOGIN_FAILURE
})

export const getCurrentUser = () => ({
    type: GET_CURRENT_USER
})

export const getCurrentUserSuccess = (user: User) => ({
    type: GET_CURRENT_USER_SUCCESS,
    payload: user
})

export const getCurrentUserFailure = () => ({
    type: GET_CURRENT_USER_FAILURE
})

export const logout = () => ({
    type: LOGOUT
})

export type UserAction =
  | ReturnType<typeof getSuggestUser>
  | ReturnType<typeof getSuggestUserSuccess>
  | ReturnType<typeof getSuggestUserFailure>
  | ReturnType<typeof login>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof getCurrentUser>
  | ReturnType<typeof getCurrentUserSuccess>
  | ReturnType<typeof getCurrentUserFailure>