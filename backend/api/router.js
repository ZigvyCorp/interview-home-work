const express = require('express')
const router = express.Router()
const posts = require('./posts')
const users = require('./users')
const comments = require('./comments')

router.use('/api/posts', posts)
router.use('/api/users', users)
router.use('/api/comments', comments)

module.exports = router