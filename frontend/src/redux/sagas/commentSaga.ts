import { call, put, takeLatest } from 'redux-saga/effects';
import { setComments } from '../reducers/commentReducer';
import { fetchComments } from '../../apis/commentApi';
import { Comment } from '../../types/commentType';

function* fetchCommentsSaga() {
    try {
        const comments: Comment[] = yield call(fetchComments);
        yield put(setComments(comments));
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

export function* watchFetchComments() {
    yield takeLatest('FETCH_COMMENTS', fetchCommentsSaga);
}
