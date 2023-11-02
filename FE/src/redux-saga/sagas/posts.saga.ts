import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { PostList } from "../../models/posts.model";
import { UserList } from "../../models/users.model";
import { getAllPosts } from "../../services/api/posts.api";
import { getAllUsers } from "../../services/api/users.api";
import { fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess } from "../slices/posts.slice";

function addUserInfoToPosts(posts: PostList, users: UserList) {
  return posts.map((post) => {
    const user = users.find((user) => user.id === post.userId);
    if (user) {
      return {
        ...post,
        userName: user.username,
      };
    } else {
      return post;
    }
  });
}

function* fetchPosts() {
  try {
    const PostList: AxiosResponse<PostList> = yield call(getAllPosts);
    const UserList: AxiosResponse<UserList> = yield call(getAllUsers);
    const postsWithUserInfo = addUserInfoToPosts(PostList.data, UserList.data);
    yield put(fetchPostsSuccess(postsWithUserInfo));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(fetchPostsRequest.type, fetchPosts);
}
