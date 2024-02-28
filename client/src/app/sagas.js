import { all, call, put } from "redux-saga/effects";
import { fetchData } from "./commonSlice";

function* fetchPosts() {
  try {
    const [posts, comments, users] = yield all([
      call(() => fetch("https://jsonplaceholder.typicode.com/posts")),
      fetch("https://jsonplaceholder.typicode.com/comments"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);

    const [postsResult, commentsResult, usersResult] = yield all([
      posts.json(),
      comments.json(),
      users.json(),
    ]);

    yield put(
      fetchData({
        posts: postsResult,
        comments: commentsResult,
        users: usersResult,
      })
    );
  } catch (e) {
    yield put({ type: "POST_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield all([fetchPosts()]);
}

export default mySaga;
