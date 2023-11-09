import { all, fork, call, put, takeEvery } from "redux-saga/effects";

import * as actions from "../actions";
import * as Api from "../services";


export function* fetchPosts(action) {
    const { skip, search, loadMore } = action?.payload || {};
    const res = yield call(Api.getListPost, skip, search);
    yield put(actions.fetchPostsDone(res.data, res.hasNext, loadMore));
}

export function* watchGetPosts() {
    yield takeEvery(actions.FETCH_POSTS_REQUEST, fetchPosts);
}

export function* watchGetComments() {
    yield takeEvery(actions.FETCH_COMMENTS_REQUEST, getComments);
}

export function* watchGetMoreComments() {
    yield takeEvery(actions.FETCH_MORE_COMMENTS_DONE, getComments);
}

function* getComments(action) {
    const { postId, skip } = action.payload;
    const res = yield call(Api.getComments, postId, skip);
    yield put(actions.fetchCommentsDone({
        postId,
        comments: res.data,
        hasNext: res.hasNext
    }));
}

export default function* root() {
    yield all([
        watchGetPosts(),
        watchGetComments(),
        fork(fetchPosts),
    ])
}