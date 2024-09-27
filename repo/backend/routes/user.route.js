const express = require('express')
const router = express.Router()
const { getUsers, getUser } = require('../controllers/user.controller')

//swagger docs goes here
router.get("/", getUsers)

module.exports = router