import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/comment-actions';
import { fetchComments } from '../fetching-functions/fetch-comments';
import { BASE_URL } from '../pagination-constants';

const getEndpoint = (postId) => `${BASE_URL}posts/${postId}/comments`;

function* fetchCommentsSaga() {
  yield takeLatest(
    [actions.GET_COMMENTS, actions.GET_TOTAL_COMMENTS],
    function* ({ type, postId }) {
      try {
        if (type === actions.GET_COMMENTS) {
          const commentsDataMap = yield call(
            fetchComments,
            getEndpoint(postId)
          );
          yield put(actions.getCommentsSuccess(commentsDataMap));
        } else {
          const totalComments = new Map([[postId, 5]]);
          yield put(actions.getTotalCommentsSuccess(totalComments));
        }
      } catch (error) {
        if (type === actions.GET_COMMENTS) {
          yield put(actions.getCommentsFailure(error));
        } else {
          yield put(actions.getTotalCommentsFailure(error));
        }
      }
    }
  );
}

export default fetchCommentsSaga;
