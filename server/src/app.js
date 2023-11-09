const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const httpStatus = require('http-status');

const postRoute = require('./routes/post.route');
const commentRoute = require('./routes/comment.route');

const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use('/api', commentRoute)
app.use('/api', postRoute)

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter);

app.use(errorHandler);

module.exports = app;