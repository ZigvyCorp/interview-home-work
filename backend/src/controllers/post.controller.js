const express = require('express')
const Post = require('../models/post.model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getPosts = async (req, res) => {
  const { page, title } = req.query
  const filter = {}
  if (title) {
    filter.title = { $regex: title, $options: 'i' }
  }
  const result = await Post.paginate(filter, {
    page: parseInt(page),
    limit: 3,
    populate: ['owner', 'comments.owner'],
    checkPaginate: true,
  })
  return res.json(result)
}

module.exports = { getPosts }
