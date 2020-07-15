var models = require('../models');
var Response = require('../utils/response');
var JWT = require('../utils/jwt');

module.exports = {
    retrieveAll: async function(req, res) {
        await models.User.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        .then(function(users) {
            res.send(Response.successResponse("This is users list.", users));
        })
        .catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal Error", err));
        });

    },
    retrieveOne: async function(req, res) {
        var targetID = req.params.id;

        await models.User.findOne({
            where: {
                id: targetID
            }
        })
        .then(function(user) {
            if (user) {
                res.send(Response.successResponse(`This is the user with ID equal ${targetID}`, user));
            } else
                res.send(Response.notFoundResponse("Not found the target user", null));
        })
        .catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error", err));
        });
    },
    create: async function(req, res) {
        await models.User.create({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            dob: new Date(req.body.dob),
            created_at: new Date()
        }).then(function(result) {
            res.send(Response.successResponse("Adding an User successfully!", result));
        }).catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error.", err));
        });
    },
    update: async function(req, res) {
        var targetID = req.params.id;

        await models.User.update({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            dob: new Date(req.body.dob),
            created_at: new Date()
        }, {
            where: {
                id: targetID
            }
        }).then(async function(result) {

            await models.User.findOne({
                where: {
                    id: targetID
                }
            })
            .then(function(user) {
                if (user)
                    res.send(Response.successResponse(`Updating user with ID equal ${targetID} successfully!`, user));
                else
                    res.send(Response.notFoundResponse("Not found the target user", null));
            })
            .catch(function(err) {
                res.send(Response.unknowErrorResponse("Internal Error", err));
            });

        }).catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error.", err));
        });
    },
    delete: async function(req, res) {
        var targetID = req.params.id;
        await models.User.destroy({
            where: {
                id: targetID
            }
        })
        .then(function(result) {
            if (result === 0) {
                res.send(Response.notFoundResponse(`Cannot find the Admin with ID equal ${targetID}.`, null));
            } else {
                res.send(Response.successResponse(`Deleting the Admin with ID equal ${targetID} successfully.`, null));
            }
        })
        .catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error.", err));
        });
    },
    login: async function(req, res) {
        var inputUsername = req.body.username;
        var inputPassword = req.body.password;

        await models.User.findOne({
            where: {
                username: inputUsername,
                password: inputPassword
            }
        })
        .then(function(user) {
            if (user) {

                var token = JWT.issue({
                    payload: {
                        user: user.id
                    }
                }, '1 day');

                res.send(Response.successResponse("Login successfully!", {
                    userInfo: user,
                    token: token
                }));
            } else
                res.send(Response.invalidAuthorizationResponse("Wrong username or password!", null));
        })
        .catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error", err));
        });
    }
}
