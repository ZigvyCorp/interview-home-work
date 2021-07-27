import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { get, post } from "../../apis";
import { PostType, User } from "../../types";
import { ActionRedux } from "../../types/redux.type";
import { setComment, setLoading, setPost, setPosts } from "../actions/post.action";
import { RootState } from "../reducers";
import { ADD_COMMENT, CREATE_POST, GET_POST, GET_POSTS } from "../types";

export function* createPost({ payload }: ActionRedux) {
  try {
    const { data } = yield call(post, `/posts`, payload);
    const posts: PostType[] = yield select((state: RootState) => state.post.posts);
    yield put(setPosts([data, ...posts]));
    alert("Post created successfully");
  } catch (error) {
    console.log(error);
  }
}
export function* getPosts({ payload }: ActionRedux) {
  try {
    const posts: PostType[] = yield select((state: RootState) => state.post.posts);
    yield put(setLoading(true));
    const { data } = yield call(get, `/posts?page=${payload}`);
    if (payload === 1) {
      yield put(setPosts([...data.posts]));
    } else {
      yield put(setPosts([...posts, ...data.posts]));
    }
    yield put(setPost({ total: data.count }));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
export function* getPost({ payload }: ActionRedux) {
  try {
    const { data } = yield call(get, `/posts/${payload}`);
    yield put(setPost({ post: data }));
  } catch (error) {
    console.log(error);
  }
}
export function* addComment({ payload }: ActionRedux) {
  try {
    const user: User = yield select((state: RootState) => state.user.user);
    const { data } = yield call(post, `/posts/${payload.id}`, { content: payload.content });
    yield put(
      setComment(
        { content: payload.content, owner: { name: user.name, avatar: user.avatar }, createdAt: new Date().toString() },
        payload.id,
      ),
    );
  } catch (error) {
    console.log(error);
  }
}

// ======watcher===========
function* watcherPosts() {
  yield takeLatest(CREATE_POST, createPost);
  yield takeLatest(GET_POSTS, getPosts);
  yield takeLatest(GET_POST, getPost);
  yield takeLatest(ADD_COMMENT, addComment);
}

export function* postSaga() {
  yield all([watcherPosts()]);
}
