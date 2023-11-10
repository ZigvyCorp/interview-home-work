import { takeEvery, call, put } from 'redux-saga/effects';

import postService from '../../services/post';

import { CREATE_POST, GET_POSTS } from './actionTypes';
import { createPostSuccess, getPostSuccess } from './actions';

function* getPostsSaga({ payload: { currentPage, perPage } }) {
    try {
        const res = yield call(postService.getPosts, currentPage, perPage);
        console.log("Posts: ", res);
        yield put(getPostSuccess(res.data));
    } catch (err) {
        console.log("Get Posts Failure: ", err);
    }
}

function* createPostSaga({ payload }) {
    try {
        const res = yield call(postService.createPost, payload);
        console.log("res: ", res);
        yield put(createPostSuccess(res.data.post));
    } catch (err) {
        console.log("Create Post Failure: ", err);
    }
}

function* postSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(CREATE_POST, createPostSaga);
}

export default postSaga;