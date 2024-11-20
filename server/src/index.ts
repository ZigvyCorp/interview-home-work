import express from 'express';
import cors from 'cors';

import { ENV_CONFIG } from './constants/config';
import { defaultErrorHandler } from './middlewares/error.middlewares';
import blogsRouter from './routes/blogs.routes';
import commentsRouter from './routes/comments.routes';
import usersRouter from './routes/users.routes';
import databaseService from './services/database.services';

databaseService.connect();

const app = express();
const port = ENV_CONFIG.PORT || 8000;
const corsOptions = {
  origin: ENV_CONFIG.CLIENT_URL
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);
app.use('/comments', commentsRouter);
app.use(defaultErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
