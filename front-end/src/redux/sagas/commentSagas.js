import { put, takeLatest, call } from "redux-saga/effects";

import { getCommentsByPostId } from "../../api/commentAPI";
import { FETCH_COMMENT_BY_POST_ID, setComments } from "../actions/commentActions";

function* fetchCommentByPostIdSaga(action) {
  try {
    const response = yield call(getCommentsByPostId, action.postId); // Corrected action.postId
    yield put(setComments(response.data));
  } catch (error) {
    // Handle error
  }
}

export function* watchFetchCommentsByPost() {
  yield takeLatest(FETCH_COMMENT_BY_POST_ID, fetchCommentByPostIdSaga);
}
// Error
