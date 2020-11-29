import { put, call } from "redux-saga/effects";
import _ from "lodash";
import {
  createPostSucceedAction,
  getPostsSucceedAction,
} from "../../actions/actionCreator";
import {
  createBlogPostService,
  getBlogPostsService,
} from "../services/blogPostsService";

export function* getBlogPosts() {
  try {
    const response = yield call(getBlogPostsService);
    yield put(getPostsSucceedAction(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* createBlogPost(info) {
  try {
    const response = yield call(createBlogPostService, info);
    yield put(createPostSucceedAction(response));
  } catch (err) {
    console.log(err);
  }
}
