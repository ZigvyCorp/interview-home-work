import {all} from 'redux-saga/effects';
import blogSaga from './features/blog/saga';
import authorSaga from './features/author/saga';

export default function* rootSaga() {
  yield all([
    blogSaga(),
    authorSaga(),
  ]);
}
