const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

//!---------------------- tham khao------------------------------------
// const tourRouter = require('./routes/tourRoutes');
// const userRouter = require('./routes/userRoutes');
// const reviewRouter = require('./routes/reviewRoutes');
// const viewRouter = require('./routes/viewRoutes');
//!---------------------- tham khao------------------------------------

//?-----------------------bai lam------------------------------------------
const postRouter = require('./routes/interviewRouter/postRouter');
const userRouter = require('./routes/interviewRouter/userRouter');
const commentRouter = require('./routes/interviewRouter/commentRouter');
//?-----------------------bai lam------------------------------------------
const app = express();

// const corsOptions = {
//   origin: 'http://localhost:4000',
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
app.use(cors()); // Use this after the variable declaration

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//! start middleware

//todo: Serving static files

app.use(express.static(path.join(__dirname, 'public')));

//todo: set security HTTP headers
app.use(helmet());

//todo: Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//todo: tạo và sử dụng middleware này để limit 100 request/ 1 giờ từ client
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour',
});

app.use('/api', limiter);

//todo: Body parser, reading data from body into req.body
app.use(express.json()); //todo: dùng middleware thì mới đọc được phần json trong body trong request ( dc gửi từ client )

//todo: Data sanitization against NOSQL query injection
app.use(mongoSanitize()); //! bỏ các symbol từ body, query, params
//todo: Data sanitination againts XSS
app.use(xss()); //! bỏ các html tag từ client cố ý đưa vào web
//todo: Prevent parameter pollution
app.use(
  hpp({
    whilelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'prices',
    ], //! định nghĩa duration vào whitelist để cho phép this property được quyền duplicate đường link
  })
);

//todo: Test middleware

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//! end middleware

//! ROUTES

//! Tour router
// app.use('/', viewRouter);
// //!-------------------------------------------------------------------- bài mẫu
// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);
// app.use('/api/v1/reviews', reviewRouter);
// //!-------------------------------------------------------------------- bài mẫu

//?-----------------------bai lam------------------------------------------
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/comments', commentRouter);

//?-----------------------bai lam------------------------------------------

app.all('*', (req, res, next) => {
  //! express mặc định rằng nếu bỏ cái gì làm đối số trong next thì cái đó là lỗi==> nhảy thẳng đến middle ware xử lý lỗi
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
//! express mặc định rằng middleware nào có 4 params thì là middle xử lý lỗi
app.use(globalErrorHandler);

// START SERVER
module.exports = app;
