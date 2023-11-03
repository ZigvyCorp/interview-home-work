import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
export const app = express();

//middleware
app.use(cors({
    origin: '*'
}));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }))

//Define version 
const apiVersion = process.env.API_VERSION || '/api/v1';

//routes
app.use(apiVersion, routes)

app.use('*', (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        status: "error",
        code: statusCode,
        stack: err.stack,
        message: err.message || "Internal Server Error",
    });
});