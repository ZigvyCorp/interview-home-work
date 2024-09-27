import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import postTypes from "../types/post.types";
import axiosClient from "../../services/axios-client";

function* fetchPosts( action ) {
    try {
        const { page, size, searchTerm } = action.payload
        const response = yield call(axiosClient.get, `/api/posts?page=${page}&size=${size}&searchTerm=${searchTerm}`);
        yield put({ type: postTypes.FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: postTypes.FETCH_POSTS_FAILURE, payload: error.message });
    }
}

function* fetchPost( action ) {
    try {
        const { id } = action.payload
        const response = yield call(axiosClient.get, `/api/posts/${id}`);
        yield put({ type: postTypes.FETCH_POST_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: postTypes.FETCH_POST_FAILURE, payload: error.message });
    }
}

function* watchFetchPosts() {
    yield takeLatest(postTypes.FETCH_POSTS_REQUEST, fetchPosts);
}

function* watchFetchPost() {
    yield takeLatest(postTypes.FETCH_POST_REQUEST, fetchPost);

}

export default function* rootSaga() {
    yield all([
        fork(watchFetchPosts),
        fork(watchFetchPost),
    ]);
}