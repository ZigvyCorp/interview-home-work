import { all } from 'redux-saga/effects';
import { authSaga } from './sagas/authSaga';
import { blogSaga } from './sagas/blogSaga';

export default function* rootSaga() {
  yield all([authSaga(), blogSaga()]);
}
