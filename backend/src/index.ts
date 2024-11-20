import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import appRoutes from './routes/app.route';

dotenv.config();

const port = process.env.PORT;
const allowedOrigin = process.env.ALLOWED_ORIGIN;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: allowedOrigin,
        methods: ['GET', 'POST'],
    }),
);

appRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
