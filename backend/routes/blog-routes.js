import express from 'express';
import { createBlog, getAllBlog, getByUserId, updateBlog, getById, deleteBlog } from '../controllers/blog-controller.js';
const blogRouter = express.Router();

blogRouter.get('/', getAllBlog);
blogRouter.get('/:id', getById);
blogRouter.get('/user/:id', getByUserId);
blogRouter.post('/add', createBlog );
blogRouter.put('/update/:id', updateBlog);
blogRouter.delete('/delete/:id', deleteBlog);

export default blogRouter;