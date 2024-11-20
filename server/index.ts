import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config(); // config variable environment
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import userRoute from "./src/routes/user-route";
import postRoute from "./src/routes/post-route";
import commentRoute from './src/routes/comment-route';

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: true })); 
app.use(morgan("short")); 


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Blog');
});

app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/comments', commentRoute);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});