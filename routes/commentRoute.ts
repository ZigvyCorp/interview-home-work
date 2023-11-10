import express from 'express';
import commentController from '../controllers/commentController';

const commentRoute = express.Router();

// add new comments
commentRoute.post('/', commentController.insertComment);
// get all comment
commentRoute.get('/all', commentController.getAll);
// delete comment
commentRoute.delete('/delete/:commentId', commentController.deleteComment);

export default commentRoute;