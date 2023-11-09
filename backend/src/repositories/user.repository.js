const User = require("../models/user.model");

async function getUserById(id) {
    const data = await User.findOne({
        where: {
            id: id,
        },
        raw: true,
    });
    return data;
}
async function getListUser() {
    const data = await User.findAll({
        where: {},
        raw: true,
    });
    return data;
}
module.exports = { getUserById, getListUser };
