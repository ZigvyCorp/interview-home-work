import { Router } from 'express';
import { searchPostByKeywordController } from './controllers/post.controller';

const searchRoutes = Router();

searchRoutes.get('/posts', searchPostByKeywordController);

export default searchRoutes;
