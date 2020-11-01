import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = new Router();

//get all users
router.route('/users').get(UserController.getUsers);

export default router;
