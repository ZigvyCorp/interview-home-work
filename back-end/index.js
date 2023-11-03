import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import connectDB from './config/connectDB.js';
import commentRoute from './routes/commentRoute.js';
import postRoute from './routes/postRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();
const port = 3000;

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/users', userRoute);
app.use('/comments', commentRoute);
app.use('/posts', postRoute);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
