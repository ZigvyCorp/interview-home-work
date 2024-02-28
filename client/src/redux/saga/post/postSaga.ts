import { call, put, takeLeading } from "redux-saga/effects";
import { GET_POST, GET_POSTS, GLOBAL_LOADING, http } from "../action";
import { IPayloadGetPost, IPayloadGetPosts } from "./model";

export function postsFetch(payload: IPayloadGetPosts) {
    return http.post(`posts`, {
        _limit: payload._limit,
        page: payload.page,
        title: payload.title
    })
        .then((response) => response.data)
        .catch(() => [])
}

export function* workPostsFetch(action: { type: string, payload: IPayloadGetPosts }): any {
    yield put({ type: GLOBAL_LOADING, isLoading: true })
    const posts = yield call(postsFetch, action.payload)
    yield put({ type: GET_POSTS, posts })
    yield put({ type: GLOBAL_LOADING, isLoading: false })
}

export function postFetch(postId: string) {
    return http.get(`posts/${postId}`)
        .then((response) => response.data)
        .catch(() => [])
}

export function* workPostFetch(action: { type: string, payload: IPayloadGetPost }): any {
    yield put({ type: GLOBAL_LOADING, isLoading: true })
    const post = yield call(postFetch, action.payload.postId)
    yield put({ type: GET_POST, post: post })
    yield put({ type: GLOBAL_LOADING, isLoading: false })
}

export function* postSaga() {
    yield takeLeading(GET_POSTS, workPostsFetch)
    yield takeLeading(GET_POST, workPostFetch)
}