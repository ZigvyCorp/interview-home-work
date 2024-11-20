import { takeEvery, put } from "redux-saga/effects";
import { fetchPostsAction, ACTION_TYPES } from "../actions/postsAction";

function* fetchPosts() {
  const postsData = yield fetch(`https://jsonplaceholder.typicode.com/posts/`); // Fetch call.
  const posts = yield postsData.json(); // Convert to JSON.
  console.log(posts);
  yield put(fetchPostsAction(posts)); // Initiate the action on fetch success.
}

export default function* watchPosts() {
  yield takeEvery(ACTION_TYPES.FETCH_POSTS, fetchPosts);
}
