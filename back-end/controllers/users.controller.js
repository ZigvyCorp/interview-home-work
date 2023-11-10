const UserModel = require("../models/users.model");

const listUser = async (req, res, next) => {
  try {
    const users = await UserModel.getListUser();

    res.send(users.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  listUser,
};
