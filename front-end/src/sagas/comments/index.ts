import { call, put, takeEvery } from "redux-saga/effects";
import * as ACTION_TYPE from "../../types/comments/actionTypes";
import * as TYPE from "../../types/comments";
import * as api from "../../api/comments";
import { getCommentsFailure, getCommentsSuccess } from "../../actions/comments";

const getComments = (id: string) =>
  api.getCommentsByPostId<TYPE.IComment[]>(id);

function* getCommentsSaga(action: TYPE.GetCommentsRequest) {
  try {
    const response: TYPE.IComment[] = yield call(getComments, action.id);
    yield put(
      getCommentsSuccess({
        comments: response,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        getCommentsFailure({
          error: error.message,
        })
      );
    }
  }
}

function* commentsSaga() {
  yield takeEvery(ACTION_TYPE.GET_COMMENTS_REQUEST, getCommentsSaga);
}

export default commentsSaga;
