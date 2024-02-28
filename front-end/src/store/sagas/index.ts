import { all } from 'redux-saga/effects';
import { watchFetchPosts } from './postSaga';

export default function* rootSaga() {
    yield all([watchFetchPosts()]);
}
