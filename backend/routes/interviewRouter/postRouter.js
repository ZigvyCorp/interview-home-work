const express = require('express');
const postController = require('../../controllers/interviewController/postController');
const commentRouter = require('./commentRouter');

const router = express.Router({ mergeParams: true }); //! chỉ định merge để sử dụng được tourId trên params

router.use('/:postId/comments', commentRouter);

router
  .route('/')
  .get(postController.getAllPosts)
  .post(postController.createPost);

router
  .route('/:id')
  .get(postController.getPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);
module.exports = router;
