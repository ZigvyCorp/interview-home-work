import express from 'express';
import { PostController } from '../controller';
const postRouter = express.Router();

postRouter.route('/').get(PostController.getPosts).post(PostController.createPost);
postRouter.route('/:id').get(PostController.getPost).patch(PostController.updatePost).delete(PostController.deletePost);
export default postRouter;
