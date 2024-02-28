// rootSaga.js
import { all } from 'redux-saga/effects';
import postsSaga from './sagas';

function* rootSaga() {
  yield all([
    postsSaga(),
    // Add more sagas here if needed
  ]);
}

export default rootSaga;