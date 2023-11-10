const express = require('express')
const router = express.Router()
const {
    getAllUser,
    getOneUser
} = require('../controllers/users')

//create routes for controllers to use in app.js
router.route('/').get(getAllUser)
router.route('/:id').get(getOneUser)

module.exports= router