const { NotFoundError } = require("../core/error.response");
const userRepository = require("../repositories/user.repository");

async function getListUser() {
    const user = await userRepository.getListUser();

    return user;
}

async function getUserById({ id }) {
    const user = await userRepository.getUserById(id);
    if (!user) throw new NotFoundError("Not found user");

    return user;
}

module.exports = {
    getUserById,
    getListUser,
};
