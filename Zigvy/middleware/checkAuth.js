const user = require('../model/users')
const jwt = require('jsonwebtoken')
module.exports = async function (req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, process.env.JWT_KEY)
        const foundUser = await user.findOne({ username: data.username })
        if (!foundUser) {
            throw new Error()
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}