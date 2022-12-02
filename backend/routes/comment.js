const express = require('express');
const router = express.Router();

const CommentController = require('../controllers/comment.controller');

router.post('/create', CommentController.createComment);
router.get('/', CommentController.getCommentsByPostId);

module.exports = router;
