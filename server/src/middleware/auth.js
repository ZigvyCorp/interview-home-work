const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async(req, res, next) => {
    if(typeof req.header('Authorization') !== 'undefined')
    {
        const token = req.header('Authorization').replace('Bearer ', '')
    
        const data = jwt.verify(token, process.env.JWT_KEY)
        try {
            const user = await User.findOne({ _id: data._id, 'tokens.token': token })
            if (!user) {
                throw new Error()
            }
            req.user = user
            req.token = token
            next()
        } catch (error) {
            res.status(401).send({ error: 'Không được phép truy cập' })
        }
    }
    else
    {
        res.status(401).json({ error: 'Không được phép truy cập' })
    }
    

}
module.exports = auth