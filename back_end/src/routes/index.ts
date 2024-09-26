import type { Express } from 'express';
import usersRouter from './users';
import postsRouter from './posts';
import commentsRouter from './comments';

function route(app: Express) {
    app.use('/users', usersRouter);
    app.use('/posts', postsRouter);
    app.use('/comments', commentsRouter);
}

export default route;
