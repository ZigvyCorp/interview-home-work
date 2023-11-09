const express = require('express');
const validate = require('../middlewares/validate');
const postController = require('../controllers/post.controller');

const postValidation = require('../validations/post.validation');

const router = express.Router();

router.get('/posts', validate(postValidation.getPosts), postController.getPosts);
router.get('/posts/:id', validate(postValidation.getPost), postController.getPost);

module.exports = router;

