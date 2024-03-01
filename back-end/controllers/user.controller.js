const User = require("../models/user.model");

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getUsers,
    getUserById
}