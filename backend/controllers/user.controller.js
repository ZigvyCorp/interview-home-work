const userService = require("../services/user.service");
const { usersView, userView } = require("../views/user.view");

module.exports = { getUsers, getById };

function getUsers(_req, _res, _next) {
	userService
		.getUsers()
		.then((users) => _res.json(usersView(users)))
		.catch(_next);
}

function getById(_req, _res, _next) {
	userService
		.getById(_req.params.id)
		.then((user) => (user ? _res.json(userView(user)) : _res.sendStatus(404)))
		.catch(_next);
}
