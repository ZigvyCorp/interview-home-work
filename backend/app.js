import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
import commentRouter from './routes/comment-routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);
app.use('/api/comment', commentRouter);

mongoose.connect(
  "mongodb+srv://admin:nghia143@cluster0.d5q93.mongodb.net/?retryWrites=true&w=majority"
)
  .then(() => app.listen(5000))
  .then(() => console.log("Server 5000, database connected"))
  .catch((err) => console.log(err));