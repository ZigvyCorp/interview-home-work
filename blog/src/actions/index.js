import { takeLatest, all } from 'redux-saga/effects';
import * as sagas from './saga-actions';
import actionTypes from './actionTypes'

export default function* rootSaga() {
    yield all([
        takeLatest(actionTypes.GET_POSTS, sagas.fetchPosts),
        takeLatest(actionTypes.GET_POST, sagas.fetchPost),
    ]);
}