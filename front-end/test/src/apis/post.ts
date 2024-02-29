import http from 'src/utils/http'

const postsApi = {
  getAllPosts() {
    const url = '/posts'
    return http.get(url)
  },
  addPost(data: any) {
    const url = '/posts'
    return http.post(url, data)
  },
  removeList(id: number) {
    const url = `/posts/${id}`
    return http.delete(url)
  },
  updatePost(data: any) {
    const url = `/posts/update`
    return http.post(url, data)
  }
}

export { postsApi }
