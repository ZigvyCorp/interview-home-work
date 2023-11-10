const router = require('express').Router()
const { getPosts } = require('../controllers/post.controller')

router.get('/', getPosts)

module.exports = router
