const express = require('express');
const commentController = require('../../controllers/interviewController/commentController');

const router = express.Router({ mergeParams: true }); //! chỉ định merge để sử dụng được tourId trên params

router
  .route('/')
  .get(commentController.getAllComment)
  .post(commentController.createComment);

router
  .route('/:id')
  .get(commentController.getComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);
module.exports = router;
