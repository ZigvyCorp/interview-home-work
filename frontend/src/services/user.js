export default request => ({
  signIn: data => request.post('/users/signin', data),
  signUp: data => request.post('/users/signup', data),
})
