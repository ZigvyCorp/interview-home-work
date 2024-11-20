import { CallEffect, PutEffect, call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure, Post } from '../actions';
import postApi from '../axios/posts';

function* fetchPostsSaga():Generator<CallEffect<AxiosResponse<Post[]>>| PutEffect<{ type: string; payload: Post[]|string }>, void, AxiosResponse<Post[]>> {
  try {
    const response = yield call(() => postApi.getPosts());
    
    yield put(fetchPostsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default rootSaga;