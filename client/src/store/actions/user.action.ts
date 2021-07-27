import { User } from "../../types";
import { GET_TOKEN, GET_USER, SET_LOGIN, SET_TOKEN, SET_USER } from "../types";

export const setUser = (user: User) => ({ type: SET_USER, payload: user })
export const getUser = () => ({ type: GET_USER })
export const setToken = (token: string) => ({ type: SET_TOKEN, payload: token })
export const getToken = () => ({ type: GET_TOKEN })
export const setLogin = () => ({ type: SET_LOGIN, payload: true })