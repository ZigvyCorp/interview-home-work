const express = require('express')
const User = require('../models/user.model')

/** @type {express.RequestHandler} */
const getCurrentUser = async (req, res) => {
  // For simplicity, just return the first user
  const user = await User.findOne()
  return res.json({ user })
}

module.exports = { getCurrentUser }
