export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_MORE_POSTS_REQUEST = 'FETCH_MORE_POSTS_REQUEST'
export const FETCH_POSTS_DONE = 'FETCH_POSTS_DONE'

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST'
export const FETCH_COMMENTS_DONE = 'FETCH_COMMENTS_DONE'
export const FETCH_MORE_COMMENTS_DONE = 'FETCH_COMMENTS_DONE'
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS'


export const fetchPostsRequest = (skip = 0, search = '', loadMore = false) => {
    return {
        type: FETCH_POSTS_REQUEST,
        payload: { skip, search, loadMore }
    }
}

export const fetchPostsDone = (posts, hasNext, loadMore = false) => {
    return {
        type: FETCH_POSTS_DONE,
        payload: {
            posts,
            hasNext,
            loadMore
        }
    }
}

export const fetchCommentsRequest = (postId, skip = 0) => {
    return {
        type: FETCH_COMMENTS_REQUEST,
        payload: { postId, skip }
    }
}

export const clearComments = (postId) => {
    return {
        type: CLEAR_COMMENTS,
        payload: postId
    }
}

export const fetchCommentsDone = (comments) => {
    return {
        type: FETCH_COMMENTS_DONE,
        payload: comments
    }
}