import express from 'express';
import { CommentController } from '../controller';
const commentRouter = express.Router();

commentRouter.route('/').post(CommentController.createComment);
commentRouter
    .route('/:id')
    .get(CommentController.getComment)
    .patch(CommentController.updateComment)
    .delete(CommentController.deleteComment);
export default commentRouter;
