var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require("mongoose")
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
var app = express();
const port = process.env.PORT
// Import Router
const postRouter = require("./app/routes/post.route")
const userRouter = require("./app/routes/user.route")
const commentRouter = require("./app/routes/comment.route")
// const productRouter = require("./app/routes/product.route")
// view engine setup
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to Mongo Successfully"))
    .catch(error => console.log(error))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
  if (req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Credentials', true);
      return res.status(200).json({});
  }
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(process.env.FIRST_PATH_API + "/posts", postRouter);
app.use(process.env.FIRST_PATH_API + "/users", userRouter);
app.use(process.env.FIRST_PATH_API + "/comments", commentRouter);
// app.use(process.env.FIRST_PATH_API + "/products", productRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
module.exports = app;
