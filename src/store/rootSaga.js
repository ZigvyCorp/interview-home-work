import { all } from 'redux-saga/effects';

const testSaga = function* () {
  console.log('test...saga');
};

export default function createRootSaga() {
  return function* rootSaga() {
    yield all([testSaga]);
  };
}
