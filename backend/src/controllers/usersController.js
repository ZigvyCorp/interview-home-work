const Users = require("../models/usersModel");

// getall
const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(makeResponse("success", users, 200));
    } catch (error) {
        res.status(200).json(makeResponse(error.message, null, 500));
    }
}

module.exports = {
    getUsers

}
