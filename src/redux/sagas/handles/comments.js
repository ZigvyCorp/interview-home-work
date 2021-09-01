import { call, put } from "redux-saga/effects";
import { setComments } from "../../reducers/comments";
import { requestGetComments } from "../request/comments";

export function* handleGetComments(action) {
  try {
    const response = yield call(requestGetComments);
    const { data } = response;
    yield put(setComments(data));
  } catch (error) {
    console.log(error);
  }
}