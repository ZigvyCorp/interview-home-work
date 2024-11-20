
const { Controller } = require('../../system/controllers/Controller');
const { User } = require('../models/User');
const { UserService } = require('../services/userService');
const userService = new UserService(new User().getInstance());
class UserController extends Controller{
    constructor(service) {
      super(service);
    }

    async findAllUser(req, res) {
      const users = await userService.findAllUser();
      res.status(200).json(users);
    }
  
    async createUser(req, res) {
      const { body } = req;
      console.log(body);
      const user = await userService.createUser(body);
      res.status(201).json(user);
    }
  
}

module.exports = new UserController(userService);