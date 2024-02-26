import { all } from 'redux-saga/effects';

import { PostWatcher } from '../store/Post/PostWatcher';

export default function* rootSaga() {
    yield all([
        PostWatcher()
    ])
}