import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { setLoading, setError, setPosts, pushPosts, setHasMore } from './index';

export default function* fetchPost(action) {
  try {
    const {
      payload: { limit, page, keyword },
    } = action;

    yield put(setLoading(true));
    yield put(setError(''));

    const params = {
      _embed: 'comments',
      _expand: 'user',
      _limit: limit + 1,
      _page: page,
    };

    if (keyword) {
      params.title_like = keyword;
    }

    const { data } = yield call(axios, {
      url: `http://jsonplaceholder.typicode.com/posts`,
      params,
    });

    const posts = data.map((item) => ({
      id: item.id,
      title: item.title,
      author: item.user.name,
      createdAt: Date.now(),
      content: item.body,
      tags: ['tag1', 'tag2', 'tag3'],
      isExpandedCmt: false,
      comments: item.comments.map((i) => ({
        id: i.id,
        username: i.name,
        content: i.body,
        createdAt: Date.now(),
        avatar: 'url',
      })),
    }));

    if (posts.length <= limit) {
      yield put(setHasMore(false));
    }

    if (page > 1) {
      yield put(pushPosts(posts.slice(0, limit)));
    } else {
      yield put(setPosts(posts.slice(0, limit)));
    }
  } catch (e) {
    console.error(e);
    yield put(setError(e.message));
  } finally {
    yield put(setLoading(false));
  }
}
