const user = require('../model/users')
const jwt = require('jsonwebtoken')
module.exports = async function (req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, process.env.JWT_KEY)
        const query = { username: data.username, password: data.password }
        const foundUser = await user.findOne(query)
        if (!foundUser) {
            throw new Error()
        }
        req.user = foundUser
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}

