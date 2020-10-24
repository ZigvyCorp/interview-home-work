import { all, takeLatest } from 'redux-saga/effects';
import fetchPost from './actions/fetchPost';
import { GET_POSTS } from './constaints';
export default function* rootSaga() {
  yield all([yield takeLatest(GET_POSTS, fetchPost)]);
}
