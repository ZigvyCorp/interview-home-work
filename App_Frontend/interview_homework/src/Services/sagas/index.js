import { all } from 'redux-saga/effects';
import postsSaga from './postsSaga';
import commentsSaga from './commentsSaga';

export default function* rootSaga() {
  yield all([postsSaga(),commentsSaga()]);
}
