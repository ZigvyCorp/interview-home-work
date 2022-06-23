const { validationResult } = require('express-validator');

const User = require('../models/User');

const getUsers = (req, res) => {
    User.find({}).then(user => {
        res.status(200).json({
            status: 'success',
            message: 'Get user successfully',
            data: user
        });
    });
};

const createUser = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'error',
            message: errors.array()[0].msg,
            data:{},
        });
    } 
    const { username, password, name = '', dob = Date.now() } = req.body;
    if(!username || !password){
        return res.status(400).json({
            status: 'error',
            message: 'Invalid username or password',
            data : {},
        })
    }
    User.findOne({username}).exec().then(user=>{
        if(user){
            res.status(400).json({
                status:'error',
                message:'User already exists',
                data:{}
            })
        }else{
            const newUser = new User({
                username,
                password,
                name,
                dob
            })
            newUser.save().then(()=>{

            })
        }
    })
};

module.exports = {
    getUsers,
    createUser
}