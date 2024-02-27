import express from 'express';
import { UserController } from '../controller';
const userRouter = express.Router();

userRouter.route('/').get(UserController.getUsers);
export default userRouter;
