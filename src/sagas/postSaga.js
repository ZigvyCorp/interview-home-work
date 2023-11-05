import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { SET_POSTS, fetchPosts } from '../actions/postActions';

function* fetchPostsSaga() {
    try {
        const postsResponse = yield call(() =>
            axios.get('/posts.json').then((res) => res.data)
        );

        const commentsResponse = yield call(() =>
            axios.get('/comments.json').then((res) => res.data)
        );

        const usersResponse = yield call(() =>
            axios.get('/users.json').then((res) => res.data)
        );

        const usersById = {};
        usersResponse.forEach((user) => {
            usersById[user.id] = user;
        });

        const commentsByPostId = {};

        commentsResponse.forEach((comment) => {
            const postId = comment.post;
            if (!commentsByPostId[postId]) {
                commentsByPostId[postId] = [];
            }
            commentsByPostId[postId].push(comment);
        });

        const postsWithCommentsAndUsers = postsResponse.map((post) => {
            let comments = commentsByPostId[post.id] || [];
            comments = comments.map((comment) => ({
                ...comment,
                user: usersById[comment.owner] || null,
            }));

            const author = usersById[post.owner] || null;

            return {
                ...post,
                comments,
                author,
            };
        });

        yield put({ type: SET_POSTS, payload: postsWithCommentsAndUsers });
    } catch (error) {
        console.error(error);
    }
}


function* watchFetchPosts() {
    yield takeEvery(fetchPosts().type, fetchPostsSaga);
}

export default watchFetchPosts;
