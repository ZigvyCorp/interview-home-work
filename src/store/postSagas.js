import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_POST_FETCH,
  GET_POST_SUCCESS,
} from "../redux/constants/postConstant";
import { BASE_URL } from "../utils/BaseUrl";

function postsFetch() {
  return fetch(`${BASE_URL}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  }).then((res) =>
    res.json().catch((err) => {
      throw err;
    })
  );
}

function* workGetPostFetch() {
  try {
    const posts = yield call(postsFetch);
    yield put({ type: GET_POST_SUCCESS, posts: posts });
  } catch (err) {
    throw err;
  }
}

function* postSaga() {
  yield takeEvery(GET_POST_FETCH, workGetPostFetch);
}

export default postSaga;
