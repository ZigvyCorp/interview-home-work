import express from 'express';
import { UserController } from '../controller';
const userRouter = express.Router();

userRouter.route('/').get(UserController.getUsers).post(UserController.createUser);
userRouter.route('/:id').get(UserController.getUser).patch(UserController.updateUser).delete(UserController.deletePost);
export default userRouter;
