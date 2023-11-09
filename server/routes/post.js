const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

// @route GET api/posts
// @desc Get posts

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({})
    res.json({ success: true, posts })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

module.exports = router
