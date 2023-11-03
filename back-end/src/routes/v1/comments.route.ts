// const authController = require('../../controllers/auth.controller');
import express from 'express';
import { commentController } from '../../controllers';
import { validate } from '../../middleware/validate';
import { customValidation, commentValidation } from '../../validations';

const router = express.Router();

router.post(
  '/create',
  validate(commentValidation.createComment),
  commentController.createComment
);

router.post(
  '/:blogId',
  validate(customValidation.queryListValidation),
  commentController.queryCommentByBlog
);

router.get('/:id', commentController.getById);

export default router;
