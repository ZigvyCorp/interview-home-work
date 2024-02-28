const Users = require("../models/usersModel");

// getall
const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getUsers

}
