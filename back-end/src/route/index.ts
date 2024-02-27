import userRouter from './userRouter';
import { Express } from 'express';

const initWebRoutes = (app: Express) => {
    app.use('/api/users/', userRouter);
};

export default initWebRoutes;
