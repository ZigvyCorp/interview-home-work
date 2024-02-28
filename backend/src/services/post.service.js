const axios = require('axios')
const apiBaseUrl = 'https://jsonplaceholder.typicode.com/posts'
const {
  findAllPost,
  createPost,
  findPostByIdAllData,
  findPostByText,
} = require('../models/repo/post.repo')
const post = require('../models/post.model')

class Post {
  static async findAllPost({
    limit = 10,
    sort = 'ctime',
    page = 1,
    filter = {},
    select = ['_id', 'title', 'body'],
  }) {
    try {
      const response = findAllPost({
        limit,
        sort,
        page,
        filter,
        select,
      })
      return response
    } catch (error) {
      console.error('Error fetching posts:', error)
      return []
    }
  }
  static async findPostById({ id }) {
    try {
      const response = await findPostByIdAllData(id)
      return response
    } catch (error) {
      if (error.response && error.response.status === 404) {
        const res = await post.findOne({ _id: id }).exec()
        if (!res) throw new Error('Post not found')
        return res
      } else {
        console.error('Error find post by id', error)
        return []
      }
    }
  }
  static async findPostByText({ text }) {
    function findSimilarTitle(posts, query) {
      const lowerCaseQuery = query.toLowerCase()
      return posts.filter((post) =>
        post.title.toLowerCase().includes(lowerCaseQuery),
      )
    }
    try {
      const post = await findAllPost({ page: 0 })
      const result = await findSimilarTitle(post.data, text)
      return {
        count: result.length,
        data: result,
      }
    } catch (error) {
      console.error('Error find post by text', error)
    }
  }

  static async createPost(data) {
    let newPost = []
    const response = findAllPost({
      limit,
      sort,
      page,
      filter,
      select,
    })
    // response.map(post => post)
    try {
      const foundPost = await post.findOne().sort('-_id').exec()
      newPost = await post.create({ _id: foundPost._id + 1, ...data })
      if (!newPost) throw new Error('Error creating post')
    } catch (err) {
      console.error(err)
    }
    return newPost
  }
  static async updatePost({ id, title, body, userId }) {
    try {
      const getPost = await axios.get(`${apiBaseUrl}/${id}`)
      if (!getPost.data) {
        throw new Error('Post not found')
      }
    } catch (error) {
      console.error('Error find post by id', error)
      return []
    }
  }
}

module.exports = Post
