const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Post = require('../models/Post')
const Comment = require('../models/Comment')

// Get comments by post id
router.get('/posts/:postId/comments', async (req, res) => {
  const postId = req.params.postId

  try {
    // Check for existing post id
    const post = await Post.findById(postId)

    if (!post) {
      return res.status(400).json({ success: false, message: 'Post not found' })
    }

    const comments = await Comment.find({ post: postId })
      .populate('owner', 'users')
      .sort({
        createdAt: -1,
      })
    res.json({
      success: true,
      comments,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
})

// Add new comment to post
router.post('/posts/:postId/comments', async (req, res) => {
  const postId = req.params.postId
  const { content, owner } = req.body

  if (!content)
    return res.status(400).json({ success: false, message: 'Missing content' })

  try {
    // Check for existing post id
    const post = await Post.findById(postId)
    if (!post) {
      return res.status(400).json({ success: false, message: 'Post not found' })
    }

    const user = await User.findById(owner)
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: 'User does not exist' })

    const newComment = new Comment({
      content,
      post: postId,
      owner,
    })

    await newComment.save()

    res.status(201).json({
      success: true,
      message: 'Comment created successfully',
      comment: newComment,
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
