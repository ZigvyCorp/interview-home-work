import { createSelector } from 'reselect'

import createReducer from '../../utils/createReducer'

const scope = 'test/post'

const Types = {
  GET_POSTS: `${scope}/GET_POSTS`,
  GET_POSTS_SUCCESS: `${scope}/GET_POSTS_SUCCESS`,
  GET_POSTS_FAILED: `${scope}/GET_POSTS_FAILED`,
  CREATE_COMMENT: `${scope}/CREATE_COMMENT`,
  CREATE_COMMENT_SUCCESS: `${scope}/CREATE_COMMENT_SUCCESS`,
  CREATE_COMMENT_FAILED: `${scope}/CREATE_COMMENT_FAILED`,
}

export const PostTypes = Types

export const PostActions = {
  getPosts: (params, callback) => ({ type: Types.GET_POSTS, params, callback }),
  getPostsSuccess: data => ({ type: Types.GET_POSTS_SUCCESS, ...data }),
  getPostsFailed: error => ({ type: Types.GET_POSTS_FAILED, error }),
  createComment: (params, callback) => ({ type: Types.CREATE_COMMENT, params, callback }),
  createCommentSuccess: comment => ({ type: Types.CREATE_COMMENT_SUCCESS, comment }),
  createCommentFailed: error => ({ type: Types.CREATE_COMMENT_FAILED, error }),
}

const initialState = {
  posts: [],
  total: 0,
  pending: {},
  errors: {},
}

export const PostReducer = createReducer(initialState, {
  [Types.GET_POSTS]: draft => {
    draft.pending.getPosts = true
  },
  [Types.GET_POSTS_SUCCESS]: (draft, { posts, total }) => {
    draft.posts = posts
    draft.total = total
    draft.pending.getPosts = false
    draft.errors.getPosts = null
  },
  [Types.GET_POSTS_FAILED]: (draft, { error }) => {
    draft.posts = []
    draft.total = 0
    draft.pending.getPosts = false
    draft.errors.getPosts = error
  },
  [Types.CREATE_COMMENT]: draft => {
    draft.pending.createComment = true
  },
  [Types.CREATE_COMMENT_SUCCESS]: (draft, { comment }) => {
    const index = draft.posts.findIndex(p => p._id === comment.post)
    if (index !== -1) {
      draft.posts[index].comments = [comment, ...draft.posts[index].comments]
    }
    draft.pending.createComment = false
    draft.errors.createComment = null
  },
  [Types.CREATE_COMMENT_FAILED]: (draft, { error }) => {
    draft.pending.createComment = false
    draft.errors.createComment = error
  },
})

export const PostSelectors = {
  selectPost: state => state.post || initialState,
  makeSelectPosts() {
    return createSelector(this.selectPost, postState => postState.posts || [])
  },
  makeSelectTotal() {
    return createSelector(this.selectPost, postState => postState.total || 0)
  },
  makeSelectPending() {
    return createSelector(this.selectPost, postState => postState.pending || {})
  },
  makeSelectGetPostsPending() {
    return createSelector(this.makeSelectPending(), pending => pending.getPosts || false)
  },
  makeSelectErrors() {
    return createSelector(this.selectPost, postState => postState.errors || {})
  },
  makeSelectGetPostsError() {
    return createSelector(this.makeSelectErrors(), errors => errors.getPosts)
  },
}
