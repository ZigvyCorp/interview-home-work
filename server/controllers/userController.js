var User = require('../models/User');
var responseStatus = require('../common/responseStatus');
var errorMessage = require('../common/errorMessage');

async function createNewUser (data) {
    var checkExist = await User.findOne({username: data.username});
    if (checkExist) {
        throw responseStatus.code403({message: errorMessage.USER_IS_EXIST});
    } else {
        var user = new User(data);
        var hashPassword = user.hashPassword(data.password);
        if (hashPassword) {
            user.password = hashPassword
            await user.save();
            delete user.password
        } else {
            throw responseStatus.code400({message: errorMessage.AN_ERROR_OCCURRED})
        }
        return responseStatus.code200(user);
    }
}

module.exports = {
    createNewUser: createNewUser
}