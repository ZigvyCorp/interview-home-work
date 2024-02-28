import postRouter from './postRouter';
import userRouter from './userRouter';
import commentRouter from './commentRouter';
import { Express } from 'express';

const initWebRoutes = (app: Express) => {
    app.use('/api/users/', userRouter);
    app.use('/api/posts/', postRouter);
    app.use('/api/comments/', commentRouter);
};

export default initWebRoutes;
