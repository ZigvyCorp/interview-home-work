import express from 'express';
import { PostController } from '../controller';
const postRouter = express.Router();

postRouter.route('/').get(PostController.getPosts);
export default postRouter;
