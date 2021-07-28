import cookieSession from 'cookie-session';
import express from 'express';
import { errorHandler, notFound } from './middleware/error-handler.js';
import commentRoutes from './routes/commentRoutes.js';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(cookieSession({
	signed: false,
}))

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;