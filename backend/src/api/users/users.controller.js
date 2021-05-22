const UserService = require("./users.service");
const { dbErrors } = require("../../data");

const getUsers = (req, res) => {
  try {
    const users = UserService.getUsers();
    res.status(200).send({ message: "The user has been", data: users });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getUser = (req, res) => {
  const { id } = req.params;

  try {
    const user = UserService.getUser(+id);
    res.status(200).send({ message: "The user has been", data: user });
  } catch (error) {
    if (error instanceof dbErrors.NotFound) {
      res.status(404).send({ message: error.message });
    }
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const createUser = (req, res) => {
  const fieldToCreate = req.body;

  try {
    const newUser = UserService.createUser(fieldToCreate);
    res
      .status(200)
      .send({ message: "The new User has been created", data: newUser });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const updateProfile = (req, res) => {
  const { id } = req.params;
  const fieldToUpdate = req.body;

  try {
    UserService.updateProfile(+id, fieldToUpdate);
    res.status(200).send({ message: "The user has been updated" });
  } catch (error) {
    if (error instanceof dbErrors.NotFound) {
      res.status(404).send({ message: error.message });
    }
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  try {
    UserService.deleteUser(+id);
    res.status(200).send({ message: "The User has been deleted" });
  } catch (error) {
    if (error instanceof dbErrors.NotFound) {
      res.status(404).send({ message: error.message });
    }
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateProfile,
};
