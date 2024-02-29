'use strict';

const { CreatedResponse, OkResponse } = require("../helpers/success-response");
const UserService = require("../services/user.service");

class UserController {
    static createNewUser = async (req, res, next) => {
        new CreatedResponse({
            message: "Create user successfully",
            metadata: await UserService.createUser(req.body)
        }).send(res);
    }
    static removeUser = async (req, res, next) => {
        new OkResponse({
            message: "Remove user successfully",
            metadata: await UserService.removeUserById(req.params.id)
        }).send(res)
    }
    static getAllUsers = async (req, res, next) => {
        new OkResponse({
            message: "Get all users successfully",
            metadata: await UserService.getAllUsers()
        }).send(res)
    }
    static getUserById = async (req, res, next) => {
        new OkResponse({
            message: "Get user by id successfully",
            metadata: await UserService.getUserById(req.params.id)
        }).send(res)
    }
}

module.exports = UserController;