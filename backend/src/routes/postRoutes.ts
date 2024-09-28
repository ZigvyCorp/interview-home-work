import { Router } from "express";
import { 
  getPosts, 
  getPost, 
  createPost, 
  deletePost, 
  updatePost, 
  getCommentsByPostId
} from '../controllers/postController';
import { createPostValidator, updatePostValidator } from "../validators/post.validator";

const router = Router();

router.get('/', getPosts);
router.post('/', createPostValidator, createPost);
router.get('/:id', getPost);
router.get('/:id/comments', getCommentsByPostId);
router.delete('/:id', deletePost);
router.patch('/:id', updatePostValidator, updatePost);

export default router;