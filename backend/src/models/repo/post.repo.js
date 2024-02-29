'use strict'
const { convertId } = require('../../utils')
const post = require('../post.model')
const axios = require('axios')
const User = require('../user.model')
const comment = require('../comment.model')
const { randomDate } = require('../../utils')

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

const findAllPost = async ({ limit, sort, page, filter, select }) => {
  let dataFinal = []
  let count = 0
  const skip = (page - 1) * limit
  const query = page === 1 ? '' : `?_page=${page}&_limit=${limit}`
  const postApiData = await axios.get(`${apiUrl}${query}`)
  const postApiDataLenght = await axios.get(`${apiUrl}`)
  const newPostApiData = convertId(postApiData.data)
  const commentApiData = await axios.get(
    `https://jsonplaceholder.typicode.com/comments`,
  )
  const foundPostDb = await post
    .find(filter)
    .populate('user', 'name username email -_id')
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .select(select)
    .lean()
  const commentDBData = await comment.find({}).lean()
  if (page === 0) {
    dataFinal = [...postApiDataLenght.data, ...foundPostDb]
    count = dataFinal.length
    return { count, data: dataFinal }
  }

  if (newPostApiData.length < limit) {
    const diff = (page - postApiDataLenght / 10 + 1) * limit
    const foundPostInDb = await post
      .find(filter)
      .populate('user', 'name username email -_id')
      .sort(sort)
      .skip(diff)
      .limit(limit)
      .select(select)
      .lean()
      .then((res) => {
        return res.map((post) => {
          const restfoundComments = commentApiData.data.filter((comment) => {
            if (comment.postId === post._id) return comment
          })
          const comments = restfoundComments.map((comment) => {
            const { postId, _id, __v, createdAt, updatedAt, ...rest } = comment
            return rest
          })
          const foundCommentsDb = commentDBData.filter((comment) => {
            if (comment.postId === post._id) return comment
          })
          const commentsDb = foundCommentsDb.map((comment) => {
            const { postId, _id, __v, createdAt, updatedAt, ...rest } = comment
            return rest
          })
          const { userId, ...rest } = post
          return {
            ...rest,
            createDate: randomDate(),
            comments: [...comments, ...commentsDb],
          }
        })
      })
    dataFinal = foundPostInDb
    count = dataFinal.length
  } else {
    const getUserPost = await Promise.all(
      newPostApiData.map(async (post, index) => {
        const foundUser = await User.findOne({ _id: post.userId }).select(
          'name username email -_id',
        )
        const foundComments = commentApiData.data.filter((comment) => {
          if (comment.postId === post._id) return comment
        })
        const comments = foundComments.map((comment) => {
          const { postId, id, ...rest } = comment
          return rest
        })
        const foundCommentsDb = commentDBData.filter((comment) => {
          if (comment.postId === post._id) return comment
        })
        const commentsDb = foundCommentsDb.map((comment) => {
          const { postId, id, ...rest } = comment
          return rest
        })
        const { userId, ...rest } = post
        if (foundUser) {
          return {
            ...rest,
            user: foundUser,
            createAt: randomDate(),
            comments: [...comments, ...commentsDb],
          }
        } else {
          return {
            ...rest,
            user: {},
            comment: {},
          }
        }
      }),
    )
    if (page === 1) {
      const foundPostDb = await post
        .find(filter)
        .populate('user', 'name username email -_id')
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .select(select)
        .lean()
      dataFinal = [...foundPostDb, ...getUserPost].sort((a, b) => a._id - b._id)
      count = dataFinal.length
    } else {
      dataFinal = [...getUserPost]
      count = dataFinal.length
    }
  }

  return { count, data: dataFinal }
}
const findPostById = async (id) => {
  try {
    const foundPost = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    )
    return foundPost.data
  } catch (error) {
    const foundPostDb = await post.findOne({ _id: id })
    return foundPostDb
  }
}
const findPostByText = async (text) => {
  function findSimilarTitle(posts, query) {
    const lowerCaseQuery = query.toLowerCase()
    return posts.filter((post) =>
      post.title.toLowerCase().includes(lowerCaseQuery),
    )
  }
  try {
    const query = 'dolorem'
    const foundPost = findAllPost()
    const results = findSimilarTitle(foundPost, query)
    return results
  } catch (error) {
    throw new Error('Post not found')
  }
}
const findPostByIdAllData = async (id) => {
  try {
    const foundPost = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    )
    if (!foundPost) {
      throw new Error('Post not found')
    } else {
      const idPost = convertId(foundPost.data)
      const foundUserPost = await User.findOne({
        _id: idPost.userId,
      }).select('name username email -_id')
      const foundCommentApi = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      )
      const foundCommentDb = await comment.find({ postId: id }).lean()
      return {
        ...idPost,
        createAt: randomDate(),
        user: foundUserPost,
        comments: [...foundCommentApi.data, ...foundCommentDb].sort(
          (a, b) => a._id - b._id,
        ),
      }
    }
  } catch (error) {
    const foundPost = await post.findOne({ _id: id }).lean()
    if (!foundPost) {
      throw new Error('Post not found')
    } else {
      const foundUserPost = await User.findOne({
        _id: foundPost.user,
      }).select('name username email -_id')
      const foundCommentApi = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      )
      const foundCommentDb = await comment.find({ postId: id }).lean()
      return {
        ...foundPost,
        createAt: randomDate(),
        user: foundUserPost,
        comments: [...foundCommentApi.data, ...foundCommentDb].sort(
          (a, b) => a._id - b._id,
        ),
      }
    }
  }
}
const createPost = async ({ title, body, user }) => {
  const newPost = new post({
    title,
    body,
    user,
  })
  return await newPost.save()
}

module.exports = {
  findAllPost,
  createPost,
  findPostById,
  findPostByIdAllData,
  findPostByText,
}
