const express = require('express');
const asyncHandler = require('../../helpers/asyncHandler');
const PostController = require('../../controllers/post.controller');
const router = express.Router();

router.get('/search', asyncHandler(PostController.searchPostsByKeyword));
router.delete('/:id', asyncHandler(PostController.deletePostById));
router.get('/:id', asyncHandler(PostController.getPostById));
router.get('/', asyncHandler(PostController.getAllPosts));
router.post('/', asyncHandler(PostController.createNewPost));

module.exports = router;