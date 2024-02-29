import { Router } from 'express';
import { getUser } from '../controllers/user/index.js';

const router = Router();

router.get('/get-users', getUser);

export default router;
