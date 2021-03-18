const BaseController = require('./base-controller');
const UsersService = require('../services/users-service');
const { registerUserSchema } = require('../validations/users')
const { ResponseMessage } = require('../messages')

class UsersController extends BaseController {
  constructor() {
    super(new UsersService())
  }

  async create(req, res) {
    try {
      const entry = req.body
      await registerUserSchema.validateAsync(entry)
      await this.service.create(entry)
      ResponseMessage.success(res)
    } catch (e) {
      ResponseMessage.error(res, e)
    }
  }
}

module.exports = UsersController