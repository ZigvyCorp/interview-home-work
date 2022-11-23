import { call, put, takeLatest, all } from "redux-saga/effects";
import { PostActionType } from "../actionTypes";
import { LoadingActions, PostActions } from "../actions";
import { BaseAction } from "../actions/BaseAction";
import { Posts } from "../../API/Post/Interface";
import {
  fetchPostsDetailService,
  fetchPostsService,
} from "../../API/Post/ApiService";

function* fetchPosts() {
  try {
    yield put(LoadingActions.start());
    const result: Posts.FetchPostsResponse = yield call(fetchPostsService);
    yield put(PostActions.setPosts(result));
    yield put(LoadingActions.stop());
  } catch (error) {
    yield put(LoadingActions.stop());
    yield put(PostActions.setPosts({ items: [] }));
  }
}

function* fetchPostsDetail(action: BaseAction) {
  try {
    yield put(LoadingActions.start());
    const result: Posts.Post = yield call(
      fetchPostsDetailService,
      action?.payload
    );
    yield put(PostActions.setPostsDetail(result, action?.payload.id));
    yield put(LoadingActions.stop());
  } catch (error) {
    yield put(LoadingActions.stop());
    yield put(PostActions.setPostsDetail({}, action?.payload.id));
  }
}

export default function* () {
  yield all([takeLatest(PostActionType.fetchPosts, fetchPosts)]);
  yield all([takeLatest(PostActionType.fetchPostsDetail, fetchPostsDetail)]);
}
