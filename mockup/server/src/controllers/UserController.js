const Response = require("../response/Response")
const UserService = require("../services/UserService")

class UserController {

    async LoginUser(req, res) {

        const { username, password } = req.body
        const response = await UserService.login(username, password)

        res.status(response.statusCode).json(new Response(
            response.status,
            response.message,
            response.data
        ))
    }

    async RegisterUser(req, res) {

        const { username, name, password } = req.body

        const response = await UserService.register(username, name, password)

        res.status(response.statusCode).json(new Response(
            response.status,
            response.message,
            response.data
        ))
    }

}

module.exports = new UserController
