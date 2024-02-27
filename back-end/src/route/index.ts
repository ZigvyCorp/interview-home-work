import postRouter from './userRouter';
import userRouter from './userRouter';
import { Express } from 'express';

const initWebRoutes = (app: Express) => {
    app.use('/api/users/', userRouter);
    app.use('/api/posts/', postRouter);
};

export default initWebRoutes;
