import { all } from 'redux-saga/effects';
import HomePage from 'redux/sagas/homepageSaga';

export default function* rootSaga() {
  yield all([
    HomePage()
  ])
}