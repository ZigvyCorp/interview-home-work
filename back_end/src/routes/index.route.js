const express = require('express');
const { v4: uuid } = require('uuid');
const createError = require('http-errors');
const { logErrors } = require('../utils/logErrors');

const routes = express.Router();

routes.use('/api/posts', require('./posts.route'));
routes.use('/api/users', require('./user.route'));
routes.use('/api/comments', require('./comment.route'));

routes.use((req, res, next) => {
  next(createError.NotFound());
})

routes.use((err, req, res, next) => {
  logErrors(uuid(), req.url, req.method, err.message);
  res.status(err.status || 500).json({
    code: err.status || 500,
    message: err.message,
  })
})

module.exports = routes;
