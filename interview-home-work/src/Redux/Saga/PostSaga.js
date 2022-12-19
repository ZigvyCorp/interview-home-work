import { postServices } from "../../Services/PostServices";
import { call, takeLatest, put } from 'redux-saga/effects';
import { GET_LIST_POSTS } from "../Constant/Constant";
import { getListPosts } from "../Reducers/PostsReducer";

function *getListPostSaga() {
  try {
    let {data, status} = yield call(() => postServices.getPosts())
    yield put(getListPosts(data))
  } catch (error) {
    
  }
}

export function *listenGetListPostSaga() {
  yield takeLatest(GET_LIST_POSTS, getListPostSaga)
}