const postController = {
  async getAllPost() {
    const url = `/api/posts`
    const response = await fetch(process.env.REACT_APP_API_HOST + url)
    return response.json()
  },
}

export default postController
