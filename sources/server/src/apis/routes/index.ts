import express from 'express';

//  Import route
import userRouter from './users';
import authRouter from './auths';
import postRouter from './posts';
import commentRouter from './comment';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comment', commentRouter);

export default router;
