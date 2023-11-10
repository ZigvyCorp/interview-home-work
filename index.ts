import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import postRoute from './routes/postRoute';
import commentRoute from './routes/commentRoute';

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Database connection error!");
  }
}

app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/comment', commentRoute);

connectToDatabase();

app.listen(8000, () => {
  console.log("Sever is running...!");
});
