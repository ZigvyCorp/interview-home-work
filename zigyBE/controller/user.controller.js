
const userService = require('../services').UserService;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then((result) => res.json(result))
        .catch(err => next(err));
}

module.exports = {
    authenticate,
    register,
}