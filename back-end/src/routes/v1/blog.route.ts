// const authController = require('../../controllers/auth.controller');
import express from 'express';
import { blogController } from '../../controllers';
import { validate } from '../../middleware/validate';
import { customValidation, blogValidation } from '../../validations';

const router = express.Router();

router.post(
  '/create',
  validate(blogValidation.createBlog),
  blogController.createBlog
);
router.post(
  '/list',
  validate(customValidation.queryListValidation),
  blogController.queryBlogs
);

router.get('/:id', blogController.getById);

export default router;
