const axios = require('axios')
const apiBaseUrl = 'https://jsonplaceholder.typicode.com/posts'

class PostFactory {
  static async findAllPost({ limit = 10, sort = 'ctime', page = 1 }) {
    try {
      const response = await axios.get(apiBaseUrl, {
        params: {
          _limit: limit,
          _sort: sort,
          _page: page,
        },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching posts:', error)
      return []
    }
  }
  static async findPostById({id}) {
    try {
      const response = await axios.get(`${apiBaseUrl}/${id}`);
      return response.data; 
    } catch (error) {
      console.error('Error find post by id', error)
      return []
    }
  }
  static async createPost({title, body, userId}) {
    try {
      const response = await axios.post(apiBaseUrl,{
        title,
        body,
        userId
      });
      return response.data; 
    } catch (error) {
      console.error('Error create post', error)
      return []
    }
  }
  static async updatePost({id, title, body, userId}) {
    console.log("🚀 ~ PostFactory ~ updatePost ~ id:", id)
    // console.log("🚀 ~ PostFactory ~ updatePost ~ title, body, userId:", title, body, userId)
    try {
      const getPost = await axios.get(`${apiBaseUrl}/${id}`)
      console.log("🚀 ~ PostFactory ~ updatePost ~ getPost:", getPost.data.length)
      if(!getPost.data){
        throw new Error('Post not found')
      }

      // const response = await axios.put(`${apiBaseUrl}/${id}`, {
      //   title: title,
      //   body: body,
      //   userId: userId,
      // });
      // return response.data; 
    } catch (error) {
      console.error('Error find post by id', error)
      return []
    }
  }
}

module.exports = PostFactory
