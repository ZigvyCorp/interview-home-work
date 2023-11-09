const express = require('express');
const usersController = require('../controllers/users.controller');
const asyncHandler = require('../helper/asyncHandler');
const userRouter = express.Router();

userRouter.get('/', asyncHandler(usersController.getAllUsers))

userRouter.post('/', asyncHandler(usersController.createUser))

userRouter.get('/:userId', asyncHandler(usersController.getUserById))

module.exports = userRouter;