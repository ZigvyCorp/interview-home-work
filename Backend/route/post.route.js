const express = require('express')

const router = express.Router()
const postController = require('../controller/postController')

router.get('/get-all-post', postController.getAllPost)
router.get('', postController.index)

router.post('/create-post', postController.createPost)

module.exports = router