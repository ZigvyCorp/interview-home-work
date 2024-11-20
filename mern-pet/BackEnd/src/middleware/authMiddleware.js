const jwt = require('jsonwebtoken')

const authMiddleware = (req, res) => {
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, access_token, function(err,user) {
        if (err) {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
    })
}

module.exports = {
    authMiddleware
}