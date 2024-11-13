const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.get('/detail/:id', postController.getPostById);
router.get('/search', postController.searchPosts);

module.exports = router;
