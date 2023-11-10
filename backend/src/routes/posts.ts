import { Router } from 'express';
import { getAllPosts } from '../controllers/posts';

export function postRouter(): Router {
  const router = Router();

  router.get('/', getAllPosts);

  return router;
}
