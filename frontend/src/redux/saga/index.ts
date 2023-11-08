import { all } from 'redux-saga/effects';
import { postSaga } from './saga';

export function* rootSaga() {
   all([postSaga()]);
}