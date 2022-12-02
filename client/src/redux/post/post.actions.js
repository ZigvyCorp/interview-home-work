import PostActionTypes from './post.types';

export const fetchPostsStart = () => ({
    type: PostActionTypes.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (postsMap) => ({
    type: PostActionTypes.FETCH_POSTS_SUCCESS,
    payload: postsMap,
});

export const fetchPostsFailure = (errorMessage) => ({
    type: PostActionTypes.FETCH_POSTS_FAILURE,
    payload: errorMessage,
});
