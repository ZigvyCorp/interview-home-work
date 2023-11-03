import { all } from 'redux-saga/effects';
import { watchFetchData } from './postSaga';
export function* rootSaga() {
    yield all([watchFetchData()])
}