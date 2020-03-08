import withQuery from 'with-query'

export default request => ({
  getPosts: params => request.get(withQuery('/posts', params)),
})
