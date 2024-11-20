import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB';
import _ from 'lodash';
import config from './config/appConfig';
import { postRouter, searchRouter} from './routes';

const app = express();
dotenv.config();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cookieParser());
app.use(
  cors({
    origin: [config.clientUrl],
  }),
);

app.use('/api/posts', postRouter());
app.use('/api/search', searchRouter());

app.listen(config.serverPort, () => {
  console.log(`Server is running on port ${config.serverPort}`);
  connectDB();
});

