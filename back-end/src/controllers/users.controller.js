const { Ok, Created } = require("../cores/success");
const userServices = require("../services/user.services");

class UserController {

    async getAllUsers(req, res) {
        const users = await userServices.getAllUsers();

        return new Ok(users, "Get all user successfully").send(res);
    }

    async createUser(req, res) {
        const user = await userServices.createUser(req.body);

        return new Created(user, "Create user successfully").send(res);
    }

    async getUserById(req, res) {
        const user = await userServices.getUserById(req.params.userId);

        return new Ok(user, "Get user by id successfully").send(res);
    }
}

module.exports = new UserController();