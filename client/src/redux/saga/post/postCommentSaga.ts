import { call, put, takeLeading } from "redux-saga/effects";
import { GET_POST_COMMENTS, http } from "../action";

export function postCommentsFetch(postId: number) {
    return http.post(`posts/${postId}/comments`)
        .then((response) => response.data)
        .catch(() => [])
}

export function* workPostCommentsFetch(action: { type: string, payload: { postId: number } }): any {
    const comments = yield call(postCommentsFetch, action.payload.postId)
    yield put({ type: GET_POST_COMMENTS, postComments: comments })
}

export function* postCommentSaga() {
    yield takeLeading(GET_POST_COMMENTS, workPostCommentsFetch)
}