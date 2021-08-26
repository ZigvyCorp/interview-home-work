const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router({ mergeParams: true });

// CRUD
router
  .route('/')
  .get(commentController.getAllComments)
  .post(commentController.setPostUserIds, commentController.createComment);

router
  .route('/:id')
  .get(commentController.getComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);

module.exports = router;
