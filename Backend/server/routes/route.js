import express from 'express';
import { createPost, getAllPost, getSinglePost, getPostWithKeyword, updatePost, deletePost } from '../controllers/post_controller.js';
import { createComment, getAllComment, getSingleComment, getCommentWithPostID, updateComment, deletecomment } from '../controllers/comment_controller.js';

const router = express.Router();
router.post('/posts', createPost);
router.get('/posts', getAllPost);
router.get('/posts/:id', getSinglePost);
router.get('/posts/title/:keyword', getPostWithKeyword)
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

router.post('/comments', createComment);
router.get('/comments', getAllComment);
router.get('/comments/:id', getSingleComment);
router.get('/comments/post/:id', getCommentWithPostID)
router.put('/comments/:id', updateComment);
router.delete('/comments/:id', deletecomment);

export default router;