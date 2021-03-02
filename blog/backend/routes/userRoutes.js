import express from 'express';
import { getUsers } from '../controllers/userControllers.js';

const router = express.Router();

router.route('/').get(getUsers);

export default router;
