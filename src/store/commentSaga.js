import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_COMMENTS_FETCH,
  GET_COMMENTS_SUCCESS,
} from "../redux/constants/commentConstant";
import { BASE_URL } from "../utils/BaseUrl";

function commentFetch(postId) {
  return fetch(`${BASE_URL}/posts/${postId}/comments`, {
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

function* workGetCommentFetch(action) {
  try {
    const comments = yield call(commentFetch, action.payload);
    yield put({ type: GET_COMMENTS_SUCCESS, comments: comments });
  } catch (err) {
    throw err;
  }
}

function* commentSaga() {
  yield takeEvery(GET_COMMENTS_FETCH, workGetCommentFetch);
}

export default commentSaga;
