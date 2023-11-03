import { Router } from 'express';
import { findAllPostsController, findPostByIDController } from './controllers/post.controller';

const postRoutes = Router();

postRoutes.get('/', findAllPostsController);
postRoutes.get('/:postID', findPostByIDController);

export default postRoutes;
