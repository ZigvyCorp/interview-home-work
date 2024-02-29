import { call, put } from "redux-saga/effects";
import postsApi from "@/features/post/post.service";
import { IPost } from "@/common/@types/types";
import { postsActions } from "./postsSlice";

const fetchPosts = async (): Promise<IPost[]> => {
  try {
    const posts: IPost[] = await postsApi.getPosts();
    return posts;
  } catch (error) {
    return [];
  }
};

export function* getPostsAsync() {
  try {
    const posts: IPost[] = yield call(fetchPosts);
    yield put(postsActions.getPostsSuccess(posts));
  } catch (error) {
    yield put(postsActions.getPostsSuccess(error));
  }
}
