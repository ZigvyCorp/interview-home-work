import { Express } from 'express';
import postRouter from './PostRouter';

const routes = (app: Express) => {
  app.use('/api/post', postRouter);
};

export default routes;
