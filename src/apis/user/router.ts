import { Router } from 'express';
import Middleware from './middleware';
import Controller from './controller';

const router = Router();

router.post('/login', Middleware.user, Controller.login);
router.post('/register', Middleware.user, Controller.register);

export default router;