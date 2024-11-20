import { all } from 'redux-saga/effects';
import postsSaga from './reducers/posts/postSaga';

export default function* rootSaga() {
  yield all([postsSaga()]);
}
