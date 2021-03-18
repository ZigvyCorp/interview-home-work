import { Map, List } from 'immutable'
import { TYPES } from '../actions/posts'

const initState = Map({
  loading: false,
  totalCount: 0,
  posts: List([]),
  search: '',
  offset: 0,
  limit: 5,
  postDetail: Map({
    loading: false,
    post: Map({}),
    message: null
  }),
  message: null
});

const postsReducer = (state = initState, action) => {
  const { payload = {}, message } = action
  switch (action.type) {
    case TYPES.POSTS_FETCH_NEWEST_POSTS: {
      const { isRefreshed } = payload
      const offset = isRefreshed ? 0 : state.get('offset')
      return state
              .set('offset', offset)
              .set('loading', true)
    }
    case TYPES.POSTS_FETCH_NEWEST_POSTS_SUCCEED: {
      const { isRefreshed, data: { totalCount, data = [] }} = payload
      const posts = isRefreshed ? List(data) : state.get('posts').merge(data)
      const offset = isRefreshed ? data.length : state.get('posts').size + data.length
      return state
              .set('posts', posts)
              .set('offset', offset)
              .set('totalCount', totalCount)
              .set('loading', false)
    }
    case TYPES.POSTS_FETCH_NEWEST_POSTS_FAILED: {
      return state
              .set('message', message)
              .set('loading', false)
    }
    case TYPES.POSTS_SET_FILTER: {
      const { search } = payload
      return state
              .set('search', search)
    }
    case TYPES.POST_FETCH_POST_DETAIL: {
      return state.setIn(['postDetail', 'loading'], true)
    }
    case TYPES.POST_FETCH_POST_DETAIL_SUCCEED: {
      const { post } = payload
      return state
              .setIn(['postDetail', 'post'], Map(post))
              .setIn(['postDetail', 'loading'], false)
    }
    case TYPES.POST_FETCH_POST_DETAIL_FAILED: {
      return state
              .setIn(['postDetail', 'loading'], false)
              .setIn(['postDetail', 'message'], message)
    }
    default:
      return state
  };
}

export default postsReducer