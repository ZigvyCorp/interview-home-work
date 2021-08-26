const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const compression = require('compression');

const globalErrorHandler = require('./utils/globalErrorHandler');
const AppError = require('./utils/AppError');
const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
const commentRouter = require('./routes/commentRoute');

const app = express();

// 1) GLOBAL MIDDLEWARES
// Cross-Origin Resource Sharing
app.use(cors());

// SET security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Development loggin
app.use(morgan('dev'));

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour! ⛔',
});
app.use('/', limiter);

// Body parse, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use(compression());

// 2) ROUTES
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

// Handler error router
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server! 💥`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
