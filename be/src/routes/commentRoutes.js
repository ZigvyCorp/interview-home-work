const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);

router.post('/', commentController.createComment);

router.put('/:id', commentController.updateComment);

router.delete('/:id', commentController.deleteComment);

module.exports = router;
