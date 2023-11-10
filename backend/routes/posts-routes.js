const express = require('express');
const postsController = require('../controllers/posts-controller');
const router = express.Router();

router.get('/', postsController.getPosts);
router.get('/:id', postsController.getPostByID);

module.exports = router;