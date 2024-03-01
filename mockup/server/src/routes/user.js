const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

router.post('/login', UserController.LoginUser)
router.post('/register', UserController.RegisterUser)

module.exports = router