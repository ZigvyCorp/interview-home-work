const express = require('express');
const app = express();
const postsRouter = require('./api/posts');
const commentsRouter = require('./api/comments');
const usersRouter = require('./api/users');

app.use(express.json());

app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/user', usersRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
