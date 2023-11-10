import { all } from 'redux-saga/effects';
import postWatcher from './watchers/postWatcher';

export default function* rootSaga() {
  yield all([postWatcher()]);
}
