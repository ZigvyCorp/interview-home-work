var User = require('../models/User');
var responseStatus = require('../common/responseStatus');
var MessageSupplier = require('../common/MessageSupplier');
var constant = require('../common/constant');
var jwt = require('jsonwebtoken');
var config = require('../../private/config')
var Helper = require('../common/Helper');

async function createNewUser (data) {
    if (Helper.checkRegexValid(constant.UsernameRegex, data.username)) throw responseStatus.code403({message: MessageSupplier.PARAMETER_NOT_VALID});
    var checkExist = await User.findOne({username: data.username});
    if (checkExist) {
        throw responseStatus.code403({message: MessageSupplier.USER_IS_EXIST});
    } else {
        var user = new User(data);
        var hashPassword = user.hashPassword(data.password);
        if (hashPassword) {
            user.password = hashPassword
            var token = jwt.sign({username: user.username, loginTime: Date.now() - constant.ONE_HOUR}, config.secretKeyToken, {
                expiresIn: constant.ONE_YEAR
            });
            await user.save();
            delete user.password
            return responseStatus.code200({message: MessageSupplier.SIGNIN_SUCCESS, user: user, token: token});
        } else {
            throw responseStatus.code400({message: MessageSupplier.AN_ERROR_OCCURRED});
        }
    }
}

async function authencation (data) {
    if (data.username && data.password) {
        var checkExist = await User.findOne({username: data.username});
        if (!checkExist) throw responseStatus.code404({message: MessageSupplier.USER_NOT_FOUND});
        else {
            var authencationGate = await checkExist.authencation(data.password);
            console.log(authencationGate)
            if (authencationGate) {
                var token = jwt.sign({username: checkExist.username, loginTime: Date.now() - constant.ONE_HOUR}, config.secretKeyToken, {
                    expiresIn: constant.ONE_YEAR
                });
                checkExist.loginTime = Date.now(); // Logout all user from another device 
                await checkExist.save();
                delete checkExist.password;
                return responseStatus.code200({message: MessageSupplier.LOGIN_SUCCESS, token: token, user: checkExist});
            }
        }
    }
    throw responseStatus.code500({message: MessageSupplier.PARAMETER_NOT_VALID});
}

module.exports = {
    createNewUser: createNewUser,
    authencation: authencation
}