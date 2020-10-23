import { all } from 'redux-saga/effects';
import { watchGetPosts } from './pages/sagas';

export default function* rootSaga() {
  yield all([watchGetPosts()]);
}
