import express from 'express';
import { getComments } from '../controllers/commentControllers.js';

const router = express.Router();

router.route('/').get(getComments);

export default router;
