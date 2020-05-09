var express = require('express');
var router = express.Router();

const { addNewComment, updateComment, deleteComment } = require('../../controllers/api/comment.controller');

//POST add new Comment
router.post('/', addNewComment);

//PATCh update post
router.patch('/:id', updateComment);

//DELETE comment
router.delete('/:id', deleteComment);
module.exports = router;