const router = require('express').Router()

router.use('/posts', require('./post.routes'))
router.use('/users', require('./user.routes'))

module.exports = router
