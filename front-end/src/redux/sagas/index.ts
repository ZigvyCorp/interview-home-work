import { all } from 'redux-saga/effects';
import { getPosts } from './postSaga';
import { getPost } from './postDetailSaga';
export function* rootSaga() {
    yield all([getPosts(), getPost()])
}