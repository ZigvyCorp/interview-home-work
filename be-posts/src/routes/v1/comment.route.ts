import express, { Router } from 'express';
import { commentController, commentValidation } from '../../modules/comment';
import { validate } from '../../modules/validate';

const router: Router = express.Router();

router
  .route('/')
  .post(validate(commentValidation.createComment), commentController.createComment)
  .get(validate(commentValidation.getComments), commentController.getComments);

router.route('/:id').get(validate(commentValidation.getComment), commentController.getCommentByPostId);
// .patch(auth('manageUsers'), validate(commentValidation.updateUser), commentController.updateUser)
// .delete(auth('manageUsers'), validate(commentValidation.deleteUser), commentController.deleteUser);

export default router;
