const jsonwebtoken = require('jsonwebtoken');

const generateToken = (payload) => {
    return jsonwebtoken.sign(payload, "Zigvy", { expiresIn: '1h' });
};

module.exports = generateToken;