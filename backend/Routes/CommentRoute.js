const express = require('express');
const {
  createComment,
  getCommentsByBlogId,
  getCommentByCommentId,
  updateComment,
  deleteComment,
  getAll,
} = require('../Controllers/CommentController');

const router = express.Router();

router.post('/', createComment);
router.get('/', getAll);
router.get('/blog/:blogId', getCommentsByBlogId);
router.get('/:commentId', getCommentByCommentId);
router.put('/:id', updateComment);
router.delete('/:commentId', deleteComment);

module.exports = router;
