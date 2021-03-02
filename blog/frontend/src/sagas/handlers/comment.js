import { call, put } from 'redux-saga/effects';
import { getCommentsFailed, setComments } from '../../actions/commentActions';
import { requestGetComments } from '../requests/comment';

export function* handleGetComments(action) {
  try {
    const response = yield call(requestGetComments);
    const { data } = response;

    yield put(setComments(data));
  } catch (error) {
    yield put(getCommentsFailed(error));
  }
}
