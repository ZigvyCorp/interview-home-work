const express = require('express');
const router = express.Router();
const commentController = require('../../controllers/comment.controller');
const auth = require('../../middlewares/auth');

router.post('/', auth, commentController.createComment);
router.get('/', auth, commentController.getCommentByPostId);

module.exports = router;