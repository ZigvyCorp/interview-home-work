import { container as serviceContainer, ServiceTypes } from "@/services";
import { PostService } from "@/services/post.service";
import { apply, put } from "redux-saga/effects";
import { PostActions } from "./actions";

export function* getPosts(action: any) {
  try {
    const postService = serviceContainer.get<PostService>(
      ServiceTypes.PostService
    );
    const response = yield apply(postService, postService.getPosts, [
      action.filter,
    ]);
    yield put({
      type: PostActions.GET_POSTS_SUCCEED,
      data: {
        posts: response.data,
        metadata: response.metadata,
      },
    });
  } catch (error) {
    yield put({ type: PostActions.GET_POSTS_FAILED, error: error.message });
  }
}
