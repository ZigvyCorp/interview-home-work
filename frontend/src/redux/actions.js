export const GET_POSTS_FETCH = 'GET_POSTS_FETCH'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

export const getPostsFetch = (payload) => ({
  type: GET_POSTS_FETCH,
  payload,
})

export const ON_TYPING_SEARCH = 'ON_TYPING_SEARCH'
export const onTypingSearch = (payload) => ({
  type: ON_TYPING_SEARCH,
  payload,
})
