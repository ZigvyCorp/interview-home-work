const express = require ('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const constant = require('./utils/constant');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');

require('dotenv').config();
const app = express();
app.use(passport.initialize());
require('./utils/passport');


const port = process.env.PORT || 3000;

mongoose.connect(constant.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Zigvy News MongoDB connection established successfully");
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


// View engine setup
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(cors());

// Router
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/post', postsRouter);
app.use('/comment', commentsRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
