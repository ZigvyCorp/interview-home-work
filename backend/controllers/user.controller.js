const user = require('../models/user')
const moment = require('moment');

const addUser = (req, res) => {
    let { username, name, password, dob } = req.body

    let newUser = new user({
        username,
        name,
        password,
        dob
    })
    newUser.save().then(user => {
        return res.status(200).json({
            code: 200,
            message: "Add user success!",
        })
    })
    .catch(err => {
        return res.status(500).json({
            code: 500,
            message: err.message,
        })
    })

}

const getUsers = async (req, res) => {
    await user.find()
        .then((users) => {

            return res.status(200).json({
                code: 200,
                message: "Add user success!",
                data: users
            })
        })
        .catch(e => {
            return res.status(500).json({
                code: 500,
                message: e.message,
            })
        })

}

module.exports = {
    addUser,
    getUsers
}