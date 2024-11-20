const router = require('express').Router()
const UserController = require('../controllers/user.controller')

router.post('/', UserController.searchUsers)
router.get('/:id', UserController.searchUser)


module.exports = router