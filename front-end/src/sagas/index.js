import { 
	// all, call, takeEvery,
	put,
} from 'redux-saga/effects'

import { 
	// doAddComment,
	// doFetchComments, 
	doSetComments
} from '../actions/comments'
import { 
  // doAddPost,
  // doFetchPosts,
  doSetPosts
} from '../actions/posts'
import { 
	// doAddUser,
	// doFetchUsers,
	doSetUsers
} from '../actions/users'

import { 
	commentsData,
	postsData,
	usersData,
} from '../data'

const delay = ms => new Promise(res => setTimeout(res, ms))

export function* generateSaga() {
	yield delay(500)

	yield put(doSetUsers(usersData))
	yield put(doSetComments(commentsData))
	yield put(doSetPosts(postsData))

	console.log('Hello Saga!')
}