const jwt = require('jsonwebtoken')

const genneralAccessToken = async (payload) => {
    const access_token = jwt.sign({
        payload
    }, 'access_token', { expiresIn: '1h'})

    return access_token
}

module.exports = {
    genneralAccessToken
}