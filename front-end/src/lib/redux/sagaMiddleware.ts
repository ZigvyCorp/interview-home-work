// Utilities
import { account  } from './users/account'
import { managePosts } from './blogs/managePosts';
import { manageUsers } from './users/manageUsers';
import { getPosts, getUsers } from 'utils/http.ts';
import { all, call, put, takeEvery } from 'redux-saga/effects';

// Constants
import { DEFAULT_ACCOUNT } from 'constants/index.ts'

export function* getAllPosts(): IterableIterator<any> {
  try {
    const posts = yield call(getPosts);

    yield put(managePosts.actions.setPosts(posts));
  } catch (error) {
    console.log(error);
  }
}

export function* getAllUsers(): IterableIterator<any> {
  try {
    const users = yield call(getUsers);

    yield put(manageUsers.actions.setUsers(users));

    const userAccount = (() => {
      if(users) {
        return users[0];
      }

      return DEFAULT_ACCOUNT;
    })()

    yield put(account.actions.setAccount(userAccount));
  } catch (error) {
    console.log(error)
  }
}

const testGet = () => {
  console.log('testGet here')
}

export function* getAllCommentByPost() {
  yield takeEvery('comments/setTemp', testGet )
}

export default function* rootSaga() {
  yield all([
    getAllPosts(),
    getAllUsers(),
    getAllCommentByPost(),
  ])
}