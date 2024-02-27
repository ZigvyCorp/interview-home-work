var express = require('express');
const userController = require('../controllers/userController');
var userRouter = express.Router();

userRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .get(userController.get);

module.exports = userRouter;

