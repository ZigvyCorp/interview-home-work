const express = require('express');
const PostController = require('../controllers/postController');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!


// a simple test url to check that all of our files are communicating correctly.
router.get('', PostController.findAllPost);
router.get('/:id', PostController.findById);
router.get('/:id/comments', PostController.findAllCommentByPostId);
router.post('/create', PostController.createPost);
router.put('/:id', PostController.updatePost);
router.patch('/:id', PostController.updateBody);
router.delete('/:id', PostController.deletePost);
module.exports = router;
