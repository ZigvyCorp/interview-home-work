const express = require('express');
const middlewareResponse = require('../middleware/response');
const userController = require('../app/user/controller');
const userRoute = require('../app/user/route');
const postRoute = require('../app/post/route');


module.exports = (app) => {
  const apiRoutes = express.Router();
  const apiAuthenRoutes = express.Router();

  middlewareResponse(app);

  userRoute(apiRoutes);

  postRoute(apiAuthenRoutes);

  app.use('/', apiRoutes);
  app.use('/api', [userController.validateLogin], apiAuthenRoutes);
};
