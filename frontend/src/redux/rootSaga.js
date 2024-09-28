// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\redux\rootSaga.js
import { all } from 'redux-saga/effects';
import { watchPostsSaga } from './sagas/postsSaga';
import { watchLoginSaga } from './sagas/userSaga';
import { watchPostDetailSaga } from './sagas/postDetailSaga';

export default function* rootSaga() {
    yield all([
        watchPostsSaga(),
        watchLoginSaga(),
        watchPostDetailSaga(),
    ]);
}
