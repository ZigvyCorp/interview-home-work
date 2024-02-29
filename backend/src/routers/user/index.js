'use strict'
const express = require('express')
const { asyncHandler } = require('../../helpers/asyncHandler')
const userController = require('../../controllers/user.controller')
const routes = express.Router()

routes.post('/', asyncHandler(userController.createUser))
routes.get('/', asyncHandler(userController.findAllUser))
routes.get('/:id', asyncHandler(userController.findUserById))
routes.patch('/', asyncHandler(userController.updateUser))
routes.delete('/:id', asyncHandler(userController.deleteUser))

module.exports = routes