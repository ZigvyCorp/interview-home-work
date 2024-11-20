import { call, put, fork, all, takeEvery } from "redux-saga/effects";

import { getPosts, getComments } from "../apis";
import { Types } from "./types";

function* getPostsSaga() {
    try {
        const posts = yield call(getPosts);
        yield put({ type: Types.getPostsSuccess, posts });
    } catch (error) {
        console.log("ERROR getPosts: ", error);
    }
}

function* getCommentsSaga() {
    try {
        const comments = yield call(getComments);
        yield put({ type: Types.onFetchCommentsSuccess, comments });
    } catch (error) {
        console.log("ERROR getComments: ", error);
    }
}

function* postSaga() {
    yield takeEvery(Types.getPostsFetch, getPostsSaga);
    yield takeEvery(Types.onFetchComments, getCommentsSaga);
}

export default function* mySaga() {
    yield all([fork(postSaga)]);
}

