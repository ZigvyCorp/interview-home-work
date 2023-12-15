import { UserType } from "types/userType"
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "constants/actionRedux"

export const login = (body: string): any => ({
    type: LOGIN,
    payload: body
})

export const loginSuccess = (user: UserType) => ({
    type: LOGIN_SUCCESS,
    payload: user
})

export const loginFailure = () => ({
    type: LOGIN_FAILURE
})

export const logout = () => ({
    type: LOGOUT
})

export type UserAction =
    | ReturnType<typeof login>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginFailure> 