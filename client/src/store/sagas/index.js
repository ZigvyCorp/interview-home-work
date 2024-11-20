import { all } from 'redux-saga/effects';
import { postSaga } from './post'; 

function* rootSaga() {
  yield all([
    postSaga(),
  ]);
}

export default rootSaga;