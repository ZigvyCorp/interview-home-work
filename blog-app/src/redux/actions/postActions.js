export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPosts = (page = 1, limit = 10) => ({
    type: FETCH_POSTS,
    payload: { page, limit },
});

export const fetchPostsSuccess = (data) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: {
        posts: data.posts,
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        totalPosts: data.totalPosts,
    },
});

export const fetchPostsFailure = (error) => ({
    type: FETCH_POSTS_FAILURE,
    payload: error,
});
