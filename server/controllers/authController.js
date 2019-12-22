var jwt = require('jsonwebtoken');
var config = require('../../private/config');
var responseStatus = require('../common/responseStatus');
var MessageSupplier = require('../common/MessageSupplier');
var User = require('../models/User');

async function authencationGate (token) {
    try {
        var decoded = jwt.verify (token, config.secretKeyToken);

        if (decoded && decoded.username && decoded.loginTime) {
            var authencation = await User.findOne({
                username: decoded.username,
                loginTime: {$gte: decoded.loginTime}
            }, {password: 0});
            if (!authencation) throw responseStatus.code500({message: MessageSupplier.AN_ERROR_OCCURRED})
            else {
                return authencation;
            }
        }
        throw responseStatus.code500({message: MessageSupplier.AN_ERROR_OCCURRED});
    } catch (error) {
        throw responseStatus.code500({message: MessageSupplier.AN_ERROR_OCCURRED});
    }

}

module.exports = {
    authencationGate: authencationGate
}