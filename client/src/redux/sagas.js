import { call, put, fork, all, takeEvery } from "redux-saga/effects";

import { getPosts } from "../apis";
import { Types } from "./types";

function* getPostsSaga() {
    try {
        const posts = yield call(getPosts);
        yield put({ type: Types.getPostsSuccess, posts });
    } catch (error) {
        console.log("ERROR getPosts: ", error);
    }
}

function* postSaga() {
    yield takeEvery(Types.getPostsFetch, getPostsSaga);
}

export default function* mySaga() {
    yield all([fork(postSaga)]);
}

