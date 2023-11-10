const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Add new user
router.post('/users', async (req, res) => {
  const { username, password, name, dob } = req.body

  // Simple validation
  if (!username)
    return res.status(400).json({ success: false, message: 'Missing username' })
  else if (!password)
    return res.status(400).json({ success: false, message: 'Missing password' })
  else if (!name)
    return res.status(400).json({ success: false, message: 'Missing name' })

  try {
    // Check for existing username
    const usernameCheckUser = await User.findOne({ username })
    if (usernameCheckUser)
      return res
        .status(400)
        .json({ success: false, message: 'Username already taken' })

    const newUser = new User({
      username,
      password,
      name,
      dob,
    })

    await newUser.save()

    res.status(201).json({
      success: true,
      message: 'User created successfully',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
})

// Get a user (just to simulate login functionality)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    res.json({
      success: true,
      user: users[0],
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
