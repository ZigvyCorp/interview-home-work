import { AxiosResponse } from "axios";

import { call, put, takeLatest, all, Effect } from "redux-saga/effects";

import { getAuthorSuccess, getAuthorFailed, getAuthor } from "./slice";
import userApi from "@/api/users";
import { AuthorPayload } from "@/models";

function* fetchUser(action: { payload: number }) {
  try {
    const author: AxiosResponse<AuthorPayload[]> = yield call(
      userApi.getUser,
      action.payload
    );
    yield put(getAuthorSuccess({ author }));
  } catch (e: unknown) {
    yield put(getAuthorFailed({ error: (e as Error).message }));
  }
}

function* authorSaga():Generator<Effect, void, unknown> {
  yield all([yield takeLatest(getAuthor, fetchUser)]);
}

export default authorSaga;
