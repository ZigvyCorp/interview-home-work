// postSagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_POSTS_REQUEST, getPostsSuccess, getPostsFailure, searchPostsSuccess, searchPostsFailure, SEARCH_POSTS_REQUEST, getPostByIdSuccess, getPostByIdFailure, GET_POST_BY_ID_REQUEST } from '../actions/postActions';
import instance from '~/interceptors/axios';

function* fetchPosts(action) {
  const { page, size } = action.payload;
  try {
    const response = yield call(instance.get, `/posts?page=${page}&size=${size}`);
    yield put(getPostsSuccess(response.data));
  } catch (error) {
    yield put(getPostsFailure(error.message));
  }
}
function* searchPosts(action) {
  const { keyword, page, size } = action.payload;
  try {
    const response = yield call(instance.get, `/posts/search?keyword=${keyword}&page=${page}&size=${size}`);
    yield put(searchPostsSuccess(response.data));
  } catch (error) {
    yield put(searchPostsFailure(error.message));
  }
}

function* getPostById(action) {
  const postId = action.payload;
  try {
    const response = yield call(instance.get, `/posts/${postId}`);
    yield put(getPostByIdSuccess(response.data));
  } catch (error) {
    yield put(getPostByIdFailure(error.message));
  }
}
function* postSaga() {
  yield takeEvery(GET_POSTS_REQUEST, fetchPosts);
  yield takeEvery(SEARCH_POSTS_REQUEST, searchPosts);
  yield takeEvery(GET_POST_BY_ID_REQUEST, getPostById);
}

export default postSaga;
