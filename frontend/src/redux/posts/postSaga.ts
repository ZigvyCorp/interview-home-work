import axios from 'axios';
import { call, fork, put, takeEvery} from 'redux-saga/effects';
import { postActions } from './slice';
import { APIPaths } from '../../utils';

export function* getPosts() {
  yield put(postActions.getAllPostStart());
  try {
    const posts: { data: any } = yield call(axios.get, APIPaths.Post);
    yield put(postActions.getAllPostSuccess(posts.data));
  } catch (e) {
    yield put(postActions.getAllPostFailed());
  }
}

// export function* getTypiCodePosts() {
//   yield put(postActions.getAllPostStart());
//   try {
//     const posts: { data: any } = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
//     yield put(postActions.getAllPostSuccess(posts.data));
//   } catch (e) {
//     yield put(postActions.getAllPostFailed());
//   }
// }


// interface ISearch {
//   search: any;
//   setResults: any;
// }

// export function* searchPosts({ search, setResults }: ISearch) {
//   yield put(postActions.getAllPostStart());
//   try {
//     const postSearch: { data: any } = yield call(axios.get, `${APIPaths.Search}?title=${search}`);
//     if (search === "") {
//       setResults([]);
//     } else {
//       setResults(postSearch.data);
//     }
//   } catch (e) {
//     yield put(postActions.getAllPostFailed());
//   }
// }


export function* postSaga() {
  yield fork(getPosts);
  // yield fork(getTypiCodePosts);
}

