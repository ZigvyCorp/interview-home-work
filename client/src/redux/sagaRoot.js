import { all } from 'redux-saga/effects';
import Saga from './saga';
function* rootSaga() {
  yield all([Saga()]);
}

export default rootSaga;
