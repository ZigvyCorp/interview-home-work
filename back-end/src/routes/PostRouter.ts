import express from 'express';
import PostController from 'src/controllers/PostController';


const router = express.Router();

router.get('/', PostController.getAllPost);

export default router;
