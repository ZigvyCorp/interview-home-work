import express from 'express';

import routes from './routes';
import commentRouter from './routes/comment.route';
import postRouter from './routes/post.route';
import userRouter from './routes/user.route';

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use('/api/v1/users',userRouter);
    this.server.use('/api/v1/posts',postRouter);
    this.server.use('/api/v1/comments',commentRouter);
  }
}

export default new App().server;