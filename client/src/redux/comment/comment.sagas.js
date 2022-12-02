import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getCommentsOfPost } from '../../api/commentApi';

import { fetchCommentsSuccess, fetchCommentsFailure } from './comment.actions';

import CommentActionTypes from './comment.types';

export function* fetchCommentsAsync() {
    try {
        const commentMap = yield call(getCommentsOfPost, '/');
        yield put(fetchCommentsSuccess(commentMap));
    } catch (error) {
        yield put(fetchCommentsFailure(error.message));
    }
}

export function* fetchCommentsStart() {
    yield takeLatest(CommentActionTypes.FETCH_COMMENTS_START, fetchCommentsAsync);
}

export function* commentSagas() {
    yield all([call(fetchCommentsStart)]);
}
