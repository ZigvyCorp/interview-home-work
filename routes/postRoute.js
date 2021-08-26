const express = require('express');
const commentRouter = require('./commentRoute');
const postController = require('../controllers/postController');

const router = express.Router();

router.use('/:postId/comments', commentRouter);

router
  .route('/')
  .get(postController.getAllPosts)
  .post(postController.createPost);

router
  .route('/:id')
  .get(postController.getPost)
  .patch(postController.updatePost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
