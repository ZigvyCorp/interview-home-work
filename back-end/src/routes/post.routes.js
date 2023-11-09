const express = require('express');
const asyncHandler = require('../helper/asyncHandler');
const postsController = require('../controllers/posts.controller');
const postRouter = express.Router();

postRouter.get('/', asyncHandler(postsController.getAllPosts))

postRouter.post('/:userId', asyncHandler(postsController.createPost))

postRouter.get('/:postId', asyncHandler(postsController.getPostById))

module.exports = postRouter;