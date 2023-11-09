const jsonwebtoken = require('jsonwebtoken');

const generateToken = (payload) => {
    return jsonwebtoken.sign(payload, process.env.SECRET_TOKEN, { expiresIn: '1h' });
};

module.exports = generateToken;