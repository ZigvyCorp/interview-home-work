const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const login = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user) {
    return res.status(400).json({ message: 'Wrong username or password' })
  }
  if (await bcrypt.compare(password, user.password)) {
    return res.status(400).json({ message: 'Wrong username or password' })
  }
  return res.status(200).json({ user })
}

module.exports = {
  login,
}
