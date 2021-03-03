import express from 'express';
import { getUserById, getUsers } from '../controllers/userControllers.js';

const router = express.Router();

router.route('/').get(getUsers);

router.route('/:id').get(getUserById);

export default router;
