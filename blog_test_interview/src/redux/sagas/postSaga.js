import { call, put, takeEvery } from "redux-saga/effects";

const postAPI = "https://jsonplaceholder.typicode.com/posts";

function getPostAPI() {
  return fetch(postAPI, {
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

function* fetchPosts(action) {
  try {
    const posts = yield call(getPostAPI);
    yield put({ type: "GET_POSTS_SUCCESS", posts: posts });
  } catch (e) {
    yield put({ type: "GET_POSTS_FAILED", message: e.message });
  }
}

function* postSaga() {
  yield takeEvery("GET_POSTS_REQUESTED", fetchPosts);
}

export default postSaga;
