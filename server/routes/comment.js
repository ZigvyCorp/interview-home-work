const express = require('express')
const router = express.Router()

const Comment = require('../models/Comment')

// @route GET api/posts
// @desc Get posts

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find({})
    res.json({ success: true, comments })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

module.exports = router
