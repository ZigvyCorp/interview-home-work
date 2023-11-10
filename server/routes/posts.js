const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Post = require('../models/Post')

// Get all posts
router.get('/posts', async (req, res) => {
  const page = parseInt(req.query.page) || 1 // Default to page 1
  const limit = parseInt(req.query.limit) || 3 // Default to 3 posts per page
  const search = req.query.search || ''

  try {
    // Regex case insensitive
    const regex = new RegExp(search, 'i')

    const totalPosts = await Post.countDocuments({ title: regex })
    const totalPages = Math.ceil(totalPosts / limit)

    const posts = await Post.find({ title: regex })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate({
        path: 'comments',
        populate: {
          path: 'owner',
          select: 'name',
        },
      })
      .populate('owner', 'name')
      .lean()

    res.json({
      success: true,
      posts,
      currentPage: page,
      totalPages,
      totalPosts,
      limit,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
})

// Get post by id
router.get('/posts/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate({
        path: 'comments',
        populate: {
          path: 'owner',
          select: 'name',
        },
      })
      .populate('owner', 'name')
      .lean()

    if (!post)
      return res.status(400).json({ success: false, message: 'Post not found' })

    res.json({
      success: true,
      post,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
})

// Create post
router.post('/posts', async (req, res) => {
  const { title, content, tags, owner } = req.body

  // Simple validation
  if (!title)
    return res.status(400).json({ success: false, message: 'Missing title' })
  else if (!content)
    return res.status(400).json({ success: false, message: 'Missing content' })

  try {
    // Check for existing owner
    const user = await User.findById(owner)
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: 'User does not exist' })

    // Check for existing title
    const post = await Post.findOne({ title })
    if (post)
      return res
        .status(400)
        .json({ success: false, message: 'Title already exists' })

    const newPost = new Post({
      title,
      content,
      tags,
      owner,
    })

    await newPost.save()

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      post: newPost,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
})

module.exports = router
