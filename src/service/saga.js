import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { apiError, setComments, setPosts,setUsers } from '../store/actions/actions';
import { GET_API_COMMENTS, GET_API_POSTS, GET_API_USERS, SET_POSTS,SET_USERS } from '../store/actions/actionTypes';

// get all posts
function* fetchPosts() {
    // let postsData;
  try {
    const postsResponse = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const postsData = yield postsResponse.json();
    console.log("fetch");
    yield put(setPosts(postsData));
} catch (error) {
    yield put(apiError(error))
    console.error(error);
}
}
// get all users
function* fetchUsers() {
  try {
    const usersResponse = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const usersData = yield usersResponse.json();
    yield put(setUsers(usersData));
    console.log("fetch2:");
  } catch (error) {
    yield put(apiError(error))
    console.error(error);
  }
}
// get comment by PostID
function* fetchComments(action) {
    try {
        const { postId } = action.payload;
      const commentsResponse = yield call(fetch, `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      const commentsData = yield commentsResponse.json();
      yield put(setComments(commentsData,postId));
      // console.log(commentsData);
      console.log("fetch3:");
    } catch (error) {
      yield put(apiError(error))
      console.error(error);
    }
  }

  // root saga
export function* rootSaga() {
  yield takeLatest(GET_API_POSTS, fetchPosts);
  yield takeLatest(GET_API_USERS, fetchUsers);
  yield takeEvery(GET_API_COMMENTS, fetchComments);
}
