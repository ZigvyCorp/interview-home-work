import { all } from 'redux-saga/effects';
import postSaga from './postSaga';
import commentSaga from './commentSaga';

export default function* rootSaga() {
    yield all([postSaga(), commentSaga()]);
}
