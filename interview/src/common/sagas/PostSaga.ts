import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../api";
import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_FAILED,
} from "../actions/post";

function* handleGetAllPost(): Generator<any, void, any> {
  try {
    const posts = yield api.getAllPosts();
    const users = yield api.getAlluser();

    const postsWithComments = [];

    for (let post of posts) {
      const comments = yield api.getCommentByPostId(post.id);
      const user = users.find((user: any) => user?.id === post?.userId);

      postsWithComments.push({ ...post, comments, user });
    }

    yield put({ type: GET_POSTS_SUCCESS, payload: postsWithComments });
  } catch (err) {
    yield put({ type: GET_POSTS_FAILED, error: "Failed to get all posts" });
  }
}

function* handleGetSinglePost(postId: number): Generator<any, void, any> {
  try {
    const post = yield api.getPostById(postId);
    const users = yield api.getAlluser();

    const comments = yield api.getCommentByPostId(post.id);
    const user = users.find((user: any) => user?.id === post?.userId);

    console.log("handleGetSinglePost:", { ...post, comments, user });

    yield put({
      type: GET_SINGLE_POST_SUCCESS,
      payload: { ...post, comments, user },
    });
  } catch (err) {
    yield put({ type: GET_SINGLE_POST_FAILED, error: "Failed to get  post" });
  }
}

export function* watchGetAllPosts(): Generator<any, void, any> {
  yield call(handleGetAllPost);
}

export function* watchGetSinglePost(payload: any): Generator<any, void, any> {
  yield call(handleGetSinglePost, payload.payload);
}
