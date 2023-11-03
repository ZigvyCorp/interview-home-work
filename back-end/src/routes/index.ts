import { Express } from 'express';
import postRouter from './PostRouter';
import userRouter from './UserRouter';
import commentRouter from './CommentRouter';

const routes = (app: Express) => {
  app.use('/api/post', postRouter);
  app.use('/api/user', userRouter);
  app.use('/api/comment', commentRouter);
};

export default routes;
