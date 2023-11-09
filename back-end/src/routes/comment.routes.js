const express = require('express');
const commentRouter = express.Router();

const asyncHandler = require('../helper/asyncHandler');

const commentsController = require('../controllers/comments.controller');

commentRouter.get('/', asyncHandler(commentsController.getAllComments));

commentRouter.post('/post/:postId/user/:userId', asyncHandler(commentsController.createComment));

commentRouter.get('/:postId', asyncHandler(commentsController.getCommentByPostId));

module.exports = commentRouter;