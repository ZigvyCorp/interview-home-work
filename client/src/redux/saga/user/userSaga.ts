import { call, put, takeLeading } from "redux-saga/effects"
import { GET_USER, GET_USERS, http } from "../action"
import { IPayloadGetUser } from "./model"

export function usersFetch() {
    return http.post(`users`)
        .then((response) => response.data)
        .catch(() => [])
}

export function* workUsersFetch(): any {
    const users = yield call(usersFetch)
    yield put({ type: GET_USERS, users })
}
export function userFetch(userId: string) {
    return http.get(`users/${userId}`)
        .then((response) => response.data)
        .catch(() => [])
}

export function* workUserFetch(action: { type: string, payload: IPayloadGetUser }): any {
    const user = yield call(userFetch, action.payload.userId)
    yield put({ type: GET_USER, user: user })
}

export function* userSaga() {
    yield takeLeading(GET_USERS, workUsersFetch)
    yield takeLeading(GET_USER, workUserFetch)
}