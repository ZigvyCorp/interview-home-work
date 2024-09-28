const express = require('express');
const router = express.Router();
const {getComments, getCommentsByPostId, createComment, deleteComment} = require('../controllers/commentController');

router.get('/', getComments);
router.get('/post/:postId', getCommentsByPostId);
router.post('/', createComment);
router.delete('/:id', deleteComment);

module.exports = router;
