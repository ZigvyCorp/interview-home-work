const express = require("express");

const UserController = require('../controllers/users')

const router = express.Router()

const validateNewUser = require('../validators/user/newUserValidator')

router.post('/signin',  UserController.signIn)

router.post('/signup', validateNewUser.validateNewUser(), UserController.signUp)

module.exports = router