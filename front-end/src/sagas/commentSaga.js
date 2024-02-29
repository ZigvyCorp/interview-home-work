import { call, put, takeEvery } from "redux-saga/effects";
import commentService from "../services/commentService";
import {
  handleGetCommentsFailure,
  handleGetCommentsSuccess,
} from "../store/reducers/commentReducer";

function* watchGetComments() {
  try {
    const res = yield call(async () => commentService.getComments());
    if (res.data) {
      const comments = res.data || [];
      yield put(handleGetCommentsSuccess(comments));
    }
  } catch (error) {
    yield put(handleGetCommentsFailure());
  }
}

function* commentSaga() {
  yield takeEvery("comments/handleGetComments", watchGetComments);
}

export default commentSaga;
