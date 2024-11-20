const express = require('express')
const router = express.Router()

const User = require('../models/User')

// @route GET api/posts
// @desc Get posts

router.get('/', async (req, res) => {
  try {
    const Users = await User.find({})
    res.json({ success: true, Users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

module.exports = router
