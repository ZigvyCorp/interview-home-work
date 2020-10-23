const JWT = require('jsonwebtoken');
const CONFIG = require('../config/config.json');

module.exports = {
    issue: function(payload, expiresIn) {
        return JWT.sign(payload, CONFIG.development.secret, {
            expiresIn: expiresIn
        });
    },

    verify: function(token) {
        return JWT.verify(token, CONFIG.development.secret);
    }
}