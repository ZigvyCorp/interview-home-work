import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_COMMENTS_BY_POST_ID_REQUEST, getCommentsByPostIDSuccess, getCommentsByPostIDFailure } from '../actions/commentActions';
import instance from '~/interceptors/axios';
import queryString from 'query-string';

function* fetchComments(action) {
  const { page, perPage } = action.payload.filters || {};

  const postID = action.payload.postID;

  const queryParams = {
    page,
    perPage,
  };
  
  const url = `/posts/${postID}/comments/?${queryString.stringify(queryParams)}`;

  try {
    const response = yield call(instance.get, url);
    yield put(getCommentsByPostIDSuccess({ postID, page, perPage, response: response.data}));
  } catch (error) {
    yield put(getCommentsByPostIDFailure(error.message));
  }
}

function* commentSaga() {
  yield takeEvery(GET_COMMENTS_BY_POST_ID_REQUEST, fetchComments);
}

export default commentSaga;
