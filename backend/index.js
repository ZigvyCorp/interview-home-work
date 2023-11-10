const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const server = http.createServer(app);
const HttpError = require('./models/http-error');

app.use(bodyParser.json());
app.use(cors());

const postsRoutes = require('./routes/posts-routes')
app.use('/posts', postsRoutes);

const usersRoutes = require('./routes/users-routes')
app.use('/users', usersRoutes);

const commentsRoutes = require('./routes/comments-routes')
app.use('/comments', commentsRoutes)

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || 'Unknown error occurred!'});
});


const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
    
module.exports = server;
