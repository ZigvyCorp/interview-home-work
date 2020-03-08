export default request => ({
  createComment: data => request.post('/comments', data),
})
