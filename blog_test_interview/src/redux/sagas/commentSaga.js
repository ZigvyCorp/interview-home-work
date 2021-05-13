import { call, put, takeEvery } from "redux-saga/effects";

const commentAPI = "https://jsonplaceholder.typicode.com/comments";

function getCommentAPI() {
  return fetch(commentAPI, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchComments(action) {
  try {
    const comments = yield call(getCommentAPI);
    yield put({ type: "GET_COMMENTS_SUCCESS", comments: comments });
  } catch (e) {
    yield put({ type: "GET_COMMENTS_FAILED", message: e.message });
  }
}

function* commentSaga() {
  yield takeEvery("GET_COMMENTS_REQUESTED", fetchComments);
}

export default commentSaga;
