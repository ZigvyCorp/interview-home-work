const router = require('express').Router()
const { getCurrentUser } = require('../controllers/user.controller')

router.get('/me', getCurrentUser)

module.exports = router
