var express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

var router = express.Router();
const user = require('../model/users')
const checkAuth = require('../middleware/checkAuth')

const salt = 10
/* GET users detail */
router.get('/:userId', checkAuth, async function (req, res, next) {

  // prevent user see another user's info
  if (Number(req.params.userId) !== req.user.id) {
    res.status(401).json({ err: 'Not authorized to access this resource' })
    return
  }
  const query = { id: Number(req.params.userId) }
  try {
    const foundUser = await user.find(query)
    if (foundUser.length < 0) {
      res.status(400).json({ err: 'Can not find user' })
      return
    }
    res.status(200).json({ foundUser })
    return
  } catch (error) {
    res.status(400).json({ error })
  }
});

// login
router.post('/login', async (req, res, next) => {
  try {
    const foundUser = await user.find({ username: req.body.username })
    if (foundUser.length === 0) {
      res.status(401).json('Username or password is invalid')
      return
    }
    bcryptjs.compare(req.body.password, foundUser[0].password, (err, result) => {
      if (result === true) {
        const token = jwt.sign({ username: foundUser[0].username, password: foundUser[0].password }, process.env.JWT_KEY)
        res.status(200).json({ foundUser, token: `Bearer ${token}` })
        return
      }
      res.status(401).json('Username or password is invalid')
    })
  } catch (error) {
    console.log(error)
  }
});

// register
router.post('/register', async (req, res, next) => {
  try {
    const latestUser = await user.find({}).sort({ id: -1 }).limit(1)
    let userId = 1
    if (latestUser.length > 0) {
      userId = latestUser[0].id + 1
    }
    const hashPass = bcryptjs.hashSync(req.body.password, salt)
    const isExists = await user.find({ username: req.body.username })
    if (isExists.length > 0) {
      res.status(400).json('Username is already exists')
      return
    }
    const newUser = new user({
      id: userId,
      username: req.body.username,
      password: hashPass,
      name: req.body.name,
      dob: req.body.dob,
      created_at: req.body.created_at
    })
    newUser.save(function (err) {
      if (err) {
        return res.status(400).json(err)
      }
      return res.status(200).json({ newUser })
    })
  } catch (error) {
    console.log(error)
  }
})

// delete user
router.delete('/:userId', async (req, res, next) => {
  const query = { id: req.params.userId }
  user.findOneAndRemove(query, (err, data) => {
    if (err) {
      res.status(400).json({ err })
      return
    }
    if (data.length > 0) {
      res.status(200).json(data)
      return
    }
    return res.status(400).json({ err: 'Can not delete this post' })
  })
})

// update user
router.put('/:userId', checkAuth, (req, res, next) => {

  const query = { id: req.params.userId }
  const update = {
    username: req.body.username,
    name: req.body.name,
    dob: req.body.password,
    password: req.user.password
  }
  user.findOneAndUpdate(query, update, { upsert: true }, (err, data) => {
    if (err) {
      res.status(400).json({ err })
      return
    }
    const token = jwt.sign({ username: data.username, password: data.password }, process.env.JWT_KEY)
    res.status(200).json({ data, token: `Bearer ${token}` })
  })
})
module.exports = router;
