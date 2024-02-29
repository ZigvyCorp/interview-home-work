'use strict'
const express = require('express')
const { asyncHandler } = require('../../helpers/asyncHandler')
const postController = require('../../controllers/post.controller')
const routes = express.Router()

routes.get('/', asyncHandler(postController.getAllPost))
routes.get('/:id', asyncHandler(postController.getPostById))
routes.get('/search/:text', asyncHandler(postController.getPostByText))
routes.post('/', asyncHandler(postController.createPost))
routes.put('/', asyncHandler(postController.updatePost))

module.exports = routes
