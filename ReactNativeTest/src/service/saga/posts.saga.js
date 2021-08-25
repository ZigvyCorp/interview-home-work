import {all, put, takeEvery, select, call} from 'redux-saga/effects';
import {
  fetchPostAction,
  fetchPostFailAction,
  fetchPostSuccessAction,
} from '../actions/posts.actions';
import {getApi} from '../../utils/api';
import lodash from 'lodash';
import {randomDate} from '../../utils/math';
import moment from 'moment';

function* fetchPostSaga() {
  try {
    const responsePosts = yield call(getApi, 'posts');
    const responseComments = yield call(getApi, 'comments');
    const responseUsers = yield call(getApi, 'users');
    const commentsByPostId = lodash.groupBy(responseComments.data, 'postId');
    const startDate = new Date(2018, 0, 1);
    const endDate = new Date();
    let posts = lodash
      .chain(responsePosts.data)
      .map(post => {
        const createDate = moment(randomDate(startDate, endDate, 0, 24));
        return {
          ...post,
          comments: commentsByPostId[post?.id] ?? [],
          author: responseUsers?.data?.find(user => user.id === post.userId),
          createDate: createDate.format('MMM DD, YYYY'),
          createDateMil: createDate.valueOf(),
        };
      })
      .sortBy(post => post.createDateMil)
      .value();

    yield put(fetchPostSuccessAction({posts}));
  } catch (e) {
    e.message !== 'Network Error' && alert(e.message);
    console.log('fetchPostSaga e', e);
    yield put(fetchPostFailAction(e.message));
  }
}

function* watchFetchPostSaga() {
  yield takeEvery(fetchPostAction.type, fetchPostSaga);
}

export function* postSaga() {
  yield all([watchFetchPostSaga()]);
}
