import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import config from '../../utils/config';
import { fetchPostsSuccess, fetchPostsFailure, fetchPostByIdSuccess, fetchPostByIdFailure } from '../actions/postActions';

function* fetchPosts() {
  try {
    const response = yield call(axios.get, `${config.API_URL}/posts`);
    yield put(fetchPostsSuccess(response.data)); 
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* fetchPostById(action) {
  try {
    const response = yield call(axios.get, `${config.API_URL}/posts/${action.payload}`);
    yield put(fetchPostByIdSuccess(response.data)); 
  } catch (error) {
    yield put(fetchPostByIdFailure(error.message)); 
  }
}

export default function* postSaga() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPosts);
  yield takeEvery('FETCH_POST_BY_ID_REQUEST', fetchPostById); 
}
