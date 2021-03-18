const UsersController = require('../controllers/users-controller');
const BaseRoute = require('./base-route');
const AuthenticationMiddleware = require('../middlewares/authentication');

class UsersRoute extends BaseRoute {
  constructor() {
    super(new UsersController())
    this.middlewares = [AuthenticationMiddleware]
    this.registRoutes([])
  }
}

module.exports = UsersRoute