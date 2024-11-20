const UserController = require('../Controller/UserController');

const UserRoute = require('express').Router();

UserRoute.get('/', UserController.getList);
UserRoute.post('/create', UserController.create);
UserRoute.delete('/:id',  UserController.delete);
UserRoute.patch('/update/:id',  UserController.edit);
UserRoute.get('/:id',  UserController.getById);
UserRoute.post('/login',  UserController.loginUser);

module.exports = UserRoute;