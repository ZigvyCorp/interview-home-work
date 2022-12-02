import { all } from 'redux-saga/effects';
import postListSaga from '../features/PostList/postListSaga';

export default function* rootSaga() {
  yield all([postListSaga()]);
}