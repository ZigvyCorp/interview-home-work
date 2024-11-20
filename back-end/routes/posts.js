const express = require('express')
const router = express.Router()
const {
    getAllPost,
    getOnePost
} = require('../controllers/posts')

//create routes for controllers to use in app.js
router.route('/').get(getAllPost)
router.route('/:id').get(getOnePost)

module.exports= router