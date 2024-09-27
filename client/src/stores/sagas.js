import { all } from 'redux-saga/effects';
// Import your individual sagas
// import someSaga from './someSaga';

export default function* rootSaga() {
  yield all([
    // Add sagas here
    // someSaga(),
  ]);
}