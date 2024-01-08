// postSagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_POSTS_REQUEST, getPostsSuccess, getPostsFailure } from '../actions/postActions';
import instance from '~/interceptors/axios';
import queryString from 'query-string';

function* fetchPosts(action) {
  const { title, page, perPage } = action.payload.filters || {};

  const queryParams = {
    page,
    perPage,
    ...(title && { title: title }),
  };
  
  const url = `/posts?${queryString.stringify(queryParams)}`;

  try {
    const response = yield call(instance.get, url);
    yield put(getPostsSuccess(response.data));
  } catch (error) {
    yield put(getPostsFailure(error.message));
  }
}

function* postSaga() {
  yield takeEvery(GET_POSTS_REQUEST, fetchPosts);
}

export default postSaga;
