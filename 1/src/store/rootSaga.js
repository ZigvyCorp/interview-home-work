import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPosts() {
  try {
    const response = yield call(axios.get, '/api/posts');
    yield put({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILURE', payload: error });
  }
}

function* rootSaga() {
  yield all([takeEvery('FETCH_POSTS_REQUEST', fetchPosts)]);
}

export default rootSaga;



// import { API } from "../data/api";

// const getAllPosts = async () => {
//     try {
//         const response = await fetch(API.POSTS, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         return false;
//     }
// };

// const getAllComments = async () => {
//     try {
//         const response = await fetch(API.COMMENTS, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         return false;
//     }
// };

// const getAllUsers = async () => {
//     try {
//         const response = await fetch(API.USERS, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         return false;
//     }
// };

// export const ShopService = {
//     getAllPosts,
//     getAllComments,
//     getAllUsers,
// }