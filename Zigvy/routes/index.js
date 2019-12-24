var express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../model/users')
var router = express.Router();

const salt = 10
/* login */
router.post('/login', async (req, res, next) => {
    try {
        const foundUser = await user.find({ username: req.body.username })
        if(foundUser.length === 0){
            res.status(401).json('Username or password is invalid')
            return 
        }
        bcryptjs.compare(req.body.password,foundUser[0].password,(err,result)=>{
            if(result === true){
                const token = jwt.sign({username:req.body.username,password:req.body.password},process.env.JWT_KEY)
                res.status(200).json({foundUser,token:`Bearer ${token}`})
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
        const hashPass = bcryptjs.hashSync(req.body.password, salt)
        const isExists = await user.find({ username: req.body.username })
        if (isExists.length > 0) {
            res.status(400).json('Username is already exists')
            return
        }
        const newUser = new user({
            id: latestUser[0].id + 1,
            username: req.body.username,
            password: hashPass,
            name: req.body.name,
            dob: req.body.dob,
            created_at: new Date().getTime()
        })
        newUser.save(function (err) {
            if (err) {
                return res.status(400).json(err)
            }
            return res.status(200).json(newUser)
        })
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;

