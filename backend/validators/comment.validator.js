const { body } = require('express-validator');
const userService = require('../services/user.service');
const postService = require('../services/post.service');
const ValidationMiddleware = require('../middlewares/validation.middleware');

const CommentValidator = [
  body('content').isString().notEmpty().withMessage('Content must be a string'),
  body('owner').isMongoId().custom(async (value) => {
    const user = await userService.getById(value);
      if (!user) return Promise.reject();   
  }),
  body('post').isMongoId().custom(async (value) => {
    const post = await postService.getById(value);
    if (!post) return Promise.reject();
  }),
  ValidationMiddleware,
]

module.exports = CommentValidator;