import express from 'express';
import { getPosts } from '../controllers/postControllers.js';

const router = express.Router();

router.route('/').get(getPosts);

export default router;
