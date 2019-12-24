import {
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_FETCH
} from "./configs.constant";
import { call, takeEvery, put, delay } from "redux-saga/effects";
// import { api } from "./configs.services";

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload
});

export const actionFetchFail = () => ({
  type: ACTIION_FETCH_FAIL
});

function* actionFetch() {
  try {
    yield delay(2000);
    // const { data } = yield call(api);
    const data = {
      country: "vn",
      language: "en"
    };
    yield put(actionFetched(data));
  } catch (error) {
    yield put(actionFetchFail());
  }
}

function* watchFetch() {
  yield takeEvery(ACTION_FETCH, actionFetch);
}

export default [watchFetch];
