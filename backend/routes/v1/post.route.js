const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const postController = require('../../controllers/post.controller');

router.post('/', auth, postController.createPost);
router.get('/', auth, postController.getPosts);
router.get('/:id', auth, postController.getPost);
router.get('/?keyword=:q', auth, postController.searchPosts);

module.exports = router;