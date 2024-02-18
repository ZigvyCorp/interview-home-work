import { call, put, fork, take } from 'redux-saga/effects';

import { getPosts, getComments, getUsers } from './apis';
import {
    //     GET_COMMENTS_FETCH,
    GET_POSTS_FETCH,
    //     GET_USERS_FETCH,
} from './actions';
import {
    getPostSucces,
    getPostPending,
    getPostError,
} from '../features/posts/postsSlice';
import {
    getCommentsError,
    getCommentsPending,
    getCommentsSucces,
} from '../features/comments/commentsSlice';
import {
    getUsersError,
    getUsersPending,
    getUsersSucces,
} from '../features/users/usersSlice';

function* getPostsSaga(): Generator {
    while (true) {
        try {
            const action = yield take(GET_POSTS_FETCH);
            yield put(getPostPending());
            // @ts-expect-error unknow type
            const posts = yield call(getPosts, action.payload || 0);
            yield put(getPostSucces({ posts }));
        } catch (error) {
            yield put(getPostError({ error: (error as Error).message }));
        }
    }
}

function* getCommentsSaga(): Generator {
    // while (true) {
    try {
        // yield take(GET_COMMENTS_FETCH);
        yield put(getCommentsPending());
        const comments = yield call(getComments);
        yield put(getCommentsSucces({ comments }));
        console.log('getComments action finished...');
    } catch (error) {
        yield put(getCommentsError({ error: (error as Error).message }));
    }
    // }
}

function* getUsersSaga(): Generator {
    // while (true) {
    try {
        // yield take(GET_USERS_FETCH);
        yield put(getUsersPending());
        const users = yield call(getUsers);
        yield put(getUsersSucces({ users }));
        console.log('getUsers action finished...');
    } catch (error) {
        yield put(getUsersError({ error: (error as Error).message }));
    }
    // }
}

export default function* rootSaga(): Generator {
    yield fork(getPostsSaga);
    // fetch initial posts
    yield put(GET_POSTS_FETCH());
    yield fork(getUsersSaga);
    yield fork(getCommentsSaga);
}
