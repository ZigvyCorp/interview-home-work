import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { FETCH_BLOG_REQUEST, fetchBlogSuccess, fetchBlogFailure, fetchCommentFailure, fetchCommentSuccess, FETCH_COMMENT_REQUEST, fetchBlogDetailSuccess, fetchBlogDetailFailure, FETCH_BLOG_DETAIL_REQUEST, fetchBlogDetailRequest } from './actions';

function* fetchBlogSaga() {
  try {
    const response: AxiosResponse = yield call(axios.get, 'https://65dd7c93e7edadead7ee0a54.mockapi.io/blog');
    yield put(fetchBlogSuccess(response.data));
  } catch (error:any) {
    yield put(fetchBlogFailure(error));
  }
}

export function* watchFetchBlog() {
  yield takeLatest(FETCH_BLOG_REQUEST, fetchBlogSaga);
}

function* fetchBlogDetailSaga(action: ReturnType<typeof fetchBlogDetailRequest>) {
  try {
    const response: AxiosResponse = yield call(axios.get, `${'https://65dd7c93e7edadead7ee0a54.mockapi.io/blog'}/${action.payload}`);
    yield put(fetchBlogDetailSuccess(response.data));
  } catch (error:any) {
    yield put(fetchBlogDetailFailure(error));
  }
}

export function* watchFetchDetailBlog() {
  yield takeLatest(FETCH_BLOG_DETAIL_REQUEST, fetchBlogDetailSaga);
}

function* fetchCommentSaga(){
  try {
    const response: AxiosResponse = yield call(axios.get, 'https://65dd9393dccfcd562f54cc03.mockapi.io/comment');
    yield put(fetchCommentSuccess(response.data));
  } catch (error:any) {
    yield put(fetchCommentFailure(error));
  }
}
export function* watchFetchComment() {
  yield takeLatest(FETCH_COMMENT_REQUEST, fetchCommentSaga);
}