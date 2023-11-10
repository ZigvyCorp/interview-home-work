require('dotenv').config();
const cors = require('cors')

const express = require('express');
const app = express();
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const commentRouter = require('./routes/comments')
const connectDB = require('./db/connect')

app.use(cors());

// routes
app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)

const port = 5000;

//server start
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
