import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as api from './callApi'; // assume there's an api.js file for API calls
import { loginFailure, loginSuccess, signupSuccess, signupFailure, getPostsSuccess, getPostsError, getCommentsSuccess, getCommentsError } from '../actions/sagaAction';
import { GET_COMMENTS_REQUEST, GET_POSTS_REQUEST, LOGIN_REQUEST, SIGNUP_REQUEST } from '../actionTypes/actionTypes';

// get posts
function* getPostsSaga(action) {
    try {
        const posts = yield call(api.callAPIGetPosts, action.payload);
        yield put(getPostsSuccess(posts));
    } catch (error) {
        yield put(getPostsError(error));
    }
}
export function* getPosts() {
    yield takeLatest(GET_POSTS_REQUEST, getPostsSaga);
}

// get comments
function* getCommentsSaga(action) {
    try {
        const comments = yield call(api.callAPIGetComments, action.payload);
        yield put(getCommentsSuccess({ comments, postId: action.payload.postId }));
    } catch (error) {
        yield put(getCommentsError(error));
    }
}
export function* getComments() {
    yield takeEvery(GET_COMMENTS_REQUEST, getCommentsSaga);
}

// login
function* loginSaga(action) {
    try {
        const userData = yield call(api.callAPILogin, action.payload);
        yield put(loginSuccess(userData));
    } catch (error) {
        yield put(loginFailure(error));
    }
}
export function* login() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}

// signup
function* signupSaga(action) {
    try {
        const userData = yield call(api.callAPISignup, action.payload);
        yield put(signupSuccess(userData));
    } catch (error) {
        yield put(signupFailure(error));
    }
}
export function* signup() {
    yield takeLatest(SIGNUP_REQUEST, signupSaga);
}
