import { call, put, takeLatest, all, Effect } from "redux-saga/effects";

import repliesAvatar from "@/assets/images/replyAvatar.png";

import postApi from "@/api/posts";
import {
  getBlog,
  getBlogFailed,
  getBlogSuccess,
  getBlogs,
  getBlogsFailed,
  getBlogsSuccess,
  getReply,
  getReplyFailed,
  getReplySuccess,
} from "./slice";
import { BlogItem, ReplyItem } from "@/models";
import { tagList } from "@/constansts";

function* fetchPostById(action: { payload: number }) {
  try {
    const post: {
      userId: number;
      id: number;
      title: string;
      body: string;
    } = yield call(postApi.getPost, action.payload);

    const blog: BlogItem = {
      id: post.id,
      author: post.userId + "",
      content: post.body,
      title: post.title,
      createdAt: new Date("08/20/2018").toISOString(),
      replyList: [],
      tagList: [],
    };

    yield put(getBlogSuccess({ blog }));
  } catch (e) {
    yield put(getBlogFailed({ error: e.message }));
  }
}
function* fetchRepliesById(action: { payload: number }) {
  try {
    const responseReplies: {
      postId: number;
      id: number;
      name: string;
      email: string;
      body: string;
    }[] = yield call(postApi.getReplies, action.payload);

    const replies: ReplyItem[] = responseReplies.map((item) => ({
      id: item.id,
      content: item.body,
      createdAt: new Date("08/20/2018").toISOString(),
      imageUrl: repliesAvatar,
      name: item.name,
    }));

    yield put(getReplySuccess({ replies }));
  } catch (e: unknown) {
    yield put(getReplyFailed({ error: (e as Error).message }));
  }
}
function* fetchPosts() {
  try {
    const posts: {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[] = yield call(postApi.getPosts);

    const blogs: BlogItem[] = posts.map((item) => ({
      id: item.id,
      author: item.userId + "",
      content: item.body,
      title: item.title,
      createdAt: new Date("08/20/2018").toISOString(),
      replyList: [],
      tagList: tagList,
    }));

    yield put(getBlogsSuccess({ blogs }));
  } catch (e: unknown) {
    yield put(getBlogsFailed({ error: (e as Error).message }));
  }
}

function* blogSaga(): Generator<Effect, void, unknown> {
  yield all([
    yield takeLatest(getBlogs, fetchPosts),
    yield takeLatest(getBlog, fetchPostById),
    yield takeLatest(getReply, fetchRepliesById),
  ]);
}

export default blogSaga;
