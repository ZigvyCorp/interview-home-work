const express = require("express");
const Router = express.Router();
const userController = require('../controllers/user.controller');

Router.get('/', userController.getUsers)

Router.post('/', userController.addUser)

module.exports = Router