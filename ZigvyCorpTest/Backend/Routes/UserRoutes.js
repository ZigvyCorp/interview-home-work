import express from 'express';
import asyncHandler from 'express-async-handler';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/', asyncHandler(userController.register));
userRouter.get('/all', asyncHandler(userController.getAllUser));

export default userRouter;
