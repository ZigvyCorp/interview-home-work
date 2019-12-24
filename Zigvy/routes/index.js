var express = require('express');
const bcruyptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../model/users')
var router = express.Router();

const salt = 10
/* login */
router.post('/login', (req, res, next) => {

});

router.post('/register', async (req, res, next) => {
    const latestUser = await user.find({}).sort({ id: -1 }).limit(1)
    const hashPass = bcruyptjs.hashSync(req.body.password, salt)
    user.find({ username: req.body.username }, (err, data) => {
        if (data) {
            res.status(400).json('Username is already exists')
            return
        }
    })
    const newUser = new user({
        id: latestUser[0].id + 1,
        username: req.body.username,
        password: hashPass,
        name: req.body.name,
        dob: req.body.dob,
        created_at: new Date().getTime()
    })
    newUser.save((err) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.status(200).json(newUser)
        return
    })
})
module.exports = router;

