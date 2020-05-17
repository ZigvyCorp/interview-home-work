const Router  = require('express').Router();
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');

Router.use('/user', userRoutes);
Router.use('/post', postRoutes);

module.exports = Router;

