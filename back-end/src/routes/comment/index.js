const express = require('express');
const asyncHandler = require('../../helpers/asyncHandler');
const CommentController = require('../../controllers/comment.controller');
const router = express.Router();

router.post('/', asyncHandler(CommentController.createComment));
router.get('/', asyncHandler(CommentController.getAllComments));
router.get('/:postId', asyncHandler(CommentController.getCommentsByPostId));

module.exports = router;
