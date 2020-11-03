import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { types, fetchPostsCompleted, fetchCommentsCompleted } from './actions';
import apiClient from '../../utils/apiClient';

function* fetchPost() {
  const response = yield call(() => apiClient.get('posts'));
  if (response.length > 0) {
    yield put(fetchPostsCompleted(response));
  }
}

function* fetchComments(action) {
  const response = yield call(() =>
    apiClient.get(`comments?postId=${action.payload}`)
  );
  if (response.length > 0) {
    yield put(
      fetchCommentsCompleted({ postId: action.payload, comments: response })
    );
  }
}

function* createPostSaga() {
  yield takeLatest(types.FETCH_POSTS, fetchPost);
  yield takeEvery(types.FETCH_COMMENTS, fetchComments);
}

export { createPostSaga };
