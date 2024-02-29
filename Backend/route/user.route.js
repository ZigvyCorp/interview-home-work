const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const verifyToken = require('../middleware/verifyToken')

router.get('', userController.index)

router.post('/login', userController.login)
router.get('/get-suggest-user', verifyToken, userController.getSuggestUser)
router.get('/get-current-user', verifyToken, userController.getCurrentUser)

module.exports = router