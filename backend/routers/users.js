const express = require("express");

const UserController = require('../controllers/users')

const router = express.Router()

const validateNewUser = require('../validators/user/newUserValidator')

const validateUpdateUser = require('../validators/user/updateUserValidator')

const validateForgotPasswordUser = require('../validators/user/forgotPasswordUserValidator')

router.post('/signin',  UserController.signIn)

router.post('/signup', validateNewUser.validateNewUser(), UserController.signUp)

router.post('/update', validateUpdateUser.validateUpdateUser(), UserController.updateProfile)

router.post('/forgotPassword', validateForgotPasswordUser.validateForgotPasswordUser(), UserController.forgotPassword)

module.exports = router