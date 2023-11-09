
const express = require('express');
const validate = require('../middlewares/validate');
const commentController = require('../controllers/comment.controller');
const postValidation = require('../validations/post.validation');

const router = express.Router();

router.get('/posts/:id/comments', validate(postValidation.getCommentsOfPost), commentController.getCommentsOfPost);

module.exports = router;