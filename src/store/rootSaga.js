import { all } from 'redux-saga/effects';
import { createPostSaga } from '../views/BlogsPage/saga';

export default function createRootSaga() {
  return function* rootSaga() {
    yield all([createPostSaga()]);
  };
}
