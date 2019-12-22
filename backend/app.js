const express = require('express');
const morgan = require('morgan');
const globalErrorHandler = require('./controllers/errorController');
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');
const commentRouter = require('./routes/commentRoutes');
const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(
  express.json({
    limit: '10kb'
  })
);


// ROUTES
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/comments', commentRouter);

// SERVE SINGLE PAGE WEB APP 
if(process.env.SPA_WEB_PATH) {
  app.use(express.static(process.env.SPA_WEB_PATH));
  app.all('*', (req, res, next) => {
    res.sendFile('index.html', { root: process.env.SPA_WEB_PATH });
    // next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
}
// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;