import express, { Router } from 'express';
import { postController, postValidation } from '../../modules/post';
import { validate } from '../../modules/validate';

const router: Router = express.Router();

router
  .route('/')
  .post(validate(postValidation.createPost), postController.createPost)
  .get(validate(postValidation.getPosts), postController.getPosts);

router.route('/:id').get(validate(postValidation.getPost), postController.getPostById);
// .patch(auth('manageUsers'), validate(postValidation.updateUser), postController.updateUser)
// .delete(auth('manageUsers'), validate(postValidation.deleteUser), postController.deleteUser);

export default router;
