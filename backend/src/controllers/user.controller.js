const userService = require('../services/user.service')
const { OK, Created, Updated } = require('../core/success.response')

class UserController {
  createUser = async (req, res, next) => {
    new Created({
      data: await userService.createUser(req.body),
    }).send(res)
  }
  findAllUser = async (req, res, next) => {
    new OK({
      data: await userService.findAllUser(req.body),
    }).send(res)
  }
  findUserById = async (req, res, next) => {
    const user_id = req.params
    new OK({
      data: await userService.findUserById(user_id),
    }).send(res)
  }
  updateUser = async (req, res, next) => {
    new OK({
      data: await userService.updateUser(req.body),
    }).send(res)
  }
  deleteUser = async (req, res, next) => {
    const user_id = req.params
    new OK({
      data: await userService.deleteUser(user_id),
    }).send(res)
  }
}
module.exports = new UserController()
