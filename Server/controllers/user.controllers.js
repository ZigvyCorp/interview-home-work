const {User, sequelize} = require("../models");

const getListUser = () => {
    return User.findAll();
};

const getUserByUserName = (userName) => {
    return User.findOne({
        where: {
            userName: userName,
        },
    });
};

const registerUser = (newUser) => {
    return User.create(newUser);
};

module.exports = {
    getUserByUserName,
    getListUser,
    registerUser,
};
