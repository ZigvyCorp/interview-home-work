import { fork, put, call, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  getCommentsFailed,
  getCommentsSuccess,
  gettingComments,
} from "../reducer/commentReducer";
import commentApi from "../../api/commentApi";

function* onGetComments() {
  try {
    const response: AxiosResponse = yield call(commentApi.getComments);
    yield put(getCommentsSuccess(response?.data));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.response?.status === 403) return;
    yield put(getCommentsFailed(error.response.data.message));
  }
}

function* watchGetCommentsFlow() {
  yield takeEvery(gettingComments.type, onGetComments);
}

export function* commentSaga() {
  yield fork(watchGetCommentsFlow);
}
