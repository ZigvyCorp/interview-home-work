const { UserService } = require("../services");

const services = new UserService();
const createUser = async (req, res, next) => {
  try {
    const { username, password, name, dob } = req.body;
    await services.create({ username, password, name, dob });

    res.status(200).json("Create User Successful");
  } catch (error) {
    next(error);
  }
};
const findUsers = async (req, res, next) => {
  try {
    const users = await services.find();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
const findUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const existedUser = await services.findById({ id });

    res.status(200).json(existedUser);
  } catch (error) {
    next(error);
  }
};
const updateUserById = async (req, res, next) => {
  try {
    const { userId, username, password, name, dob } = req.body;
    await services.update({ userId, username, password, name, dob });

    res.status(200).json("Update User Successful");
  } catch (error) {
    next(error);
  }
};
const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const existedUser = await services.deleteById({ id });

    res.status(200).json(existedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  findUserById,
  findUsers,
  updateUserById,
  deleteUserById,
};
