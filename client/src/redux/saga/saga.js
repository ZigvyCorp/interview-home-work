import { call, put, takeEvery } from 'redux-saga/effects'
import { getPostFailure, getPostSuccess } from '../reducers/postReducer';
import { getPostDetailFailure, getPostDetailSuccess } from '../reducers/postReducer';
import { getUserFailure, getUserSuccess } from '../reducers/userReducer';
import { getCommentFailure, getCommentSuccess } from '../reducers/commentReducer';
import { getPostDetailRequest, getPostRequest } from './request/getPostRequest';
import { getUserRequest } from './request/getUserRequest';
import { getCommentRequest } from './request/getCommentRequest';

function* getPostHandler() {
  try {
    const response = yield call(getPostRequest);
    yield put(getPostSuccess(response.data.content));
  } catch (error) {
    yield put(getPostFailure(error));
  }
}

function* getPostDetailHandler(action) {
  try {
    const response = yield call(getPostDetailRequest, action.payload);
    yield put(getPostDetailSuccess(response.data.content));
  } catch (error) {
    yield put(getPostDetailFailure(error));
  }
}

function* getUserHandler() {
  try {
    const response = yield call(getUserRequest);
    yield put(getUserSuccess(response.data.content));
  } catch (error) {
    yield put(getUserFailure(error));
  }
}

function* getCommentHandler() {
  try {
    const response = yield call(getCommentRequest);
    yield put(getCommentSuccess(response.data.content));
  } catch (error) {
    yield put(getCommentFailure(error));
  }
}

export default function* watcherSaga() {
  yield takeEvery('postReducer/getPost', getPostHandler);
  yield takeEvery('userReducer/getUser', getUserHandler);
  yield takeEvery('commentReducer/getComment', getCommentHandler);
  yield takeEvery('postReducer/getPostDetail', getPostDetailHandler);
}