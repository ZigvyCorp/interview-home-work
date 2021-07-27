import cookieSession from 'cookie-session';
import express from 'express';
import { errorHandler, notFound } from './middleware/error-handler.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(cookieSession({
	signed: false,
}))

app.use('/api/users', userRoutes)

app.use(notFound);
app.use(errorHandler);

export default app;