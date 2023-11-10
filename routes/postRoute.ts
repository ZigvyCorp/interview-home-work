import express from 'express';
import postController from '../controllers/postController';

const postRoute = express.Router();

// add new post
postRoute.post('/', postController.insertPost);
// get all post
postRoute.get('/all', postController.getAll);
// delete post
postRoute.delete('/delete/:postId', postController.deletePost);
// get detail post
postRoute.get('/:slug', postController.getDetail);
// update post
postRoute.put('/:postId', postController.updatePost);
// search post
postRoute.get('/search/query', postController.searchPost);

export default postRoute;