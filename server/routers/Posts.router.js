const express = require('express');
const controller = require('../controllers/Posts.controller');

const router = express.Router();

router.get('/',controller.getAllPosts);

router.get('/:id',controller.getPostById);

router.get('/:id/comments',controller.getCommentOfPost);

module.exports = router;