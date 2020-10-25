import { all } from 'redux-saga/effects';
import { saga as homepageSaga } from './@homepage';

export default function* rootSaga() {
  yield all([homepageSaga()]);
}
