const express = require('express')
const router = express.Router()
const {
    getAllCommentOfPost,
    getAllComment
} = require('../controllers/comments')

//create routes for controllers to use in app.js
router.route('/').get(getAllComment)
router.route('/:post').get(getAllCommentOfPost)

module.exports= router