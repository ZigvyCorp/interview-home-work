const express = require("express")
const router = express.Router()
const userController = require('../controllers/UserController')
const {authMiddleware} = require('../middleware/authMiddleware')

router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.get('/user-detail/:id', userController.userDetail)

module.exports = router