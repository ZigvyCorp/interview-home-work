
const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../db').User;

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hashpassword)) {
        const userWithoutHash = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.accessTokenSecret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function create(userParam) {
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);
    // hash password
    if (userParam.password) {
        user.hashpassword = bcrypt.hashSync(userParam.password, 10);
    }
    const token = jwt.sign({ sub: user.id }, config.accessTokenSecret);
    // save user
    await user.save();
    return token;
}

module.exports = {
    authenticate,
    create,
};
