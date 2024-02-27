import express from 'express';
import { UserController } from '../controller';
const userRouter = express.Router();

userRouter.route('/').get(UserController.sayHello);
export default userRouter;
