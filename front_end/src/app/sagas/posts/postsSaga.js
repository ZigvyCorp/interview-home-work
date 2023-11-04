import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { HOST_API_KEY } from '../../../utils/constants/app';

function* fetchPosts(action) {
  try {
    yield put({ type: 'POSTS_FETCH_REQUESTED' });
    const response = yield call(axios.get, `${HOST_API_KEY}/posts`, { params: action.payload });
    yield put({ type: 'POSTS_FETCH_SUCCEEDED', payload: response.data.data });
  } catch (error) {
    yield put({ type: 'POSTS_FETCH_FAILED', error: error.message });
  }
}

function* fetchPost(action) {
  try {
    yield put({ type: 'POST_FETCH_REQUESTED' });
    const response = yield call(axios.get, `${HOST_API_KEY}/posts/${action.payload.id}`);
    yield put({ type: 'POST_FETCH_SUCCEEDED', payload: response.data.data });
  } catch (error) {
    yield put({ type: 'POST_FETCH_FAILED', error: error.message });
  }
}

function* watchFetchPosts() {
  yield takeEvery('FETCH_POSTS', fetchPosts);
  yield takeEvery('FETCH_POST', fetchPost);
}

export default watchFetchPosts;
