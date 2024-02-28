const { User, sequelize } = require("../models");

const getListUser = () => {
  return User.findAll();
};

const createUser = (newUser) => {
  return User.create(newUser);
};

const getUerById = (id) => {
  return User.findByPk(id);
};

const deleteUser = (userName) => {
  return User.destroy({
    where: {
      userName: userName,
    },
  });
};

const updateUserByUserName = (userName, newUser) => {
  return User.update(newUser, {
    where: {
      userName: userName,
    },
  });
};

const getUserByUserName = (userName) => {
  return User.findOne({
    where: {
      userName: userName,
    },
  });
};

const uploadAvatarUser = (userName, avatarUrl) => {
  return User.update({ avatar: avatarUrl }, { where: { userName: userName } });
};

const registerUser = (newUser) => {
  return User.create(newUser);
};

const searchUser = (data) => {
  return sequelize.query(`
  SELECT * FROM users  WHERE userName LIKE "%${data}%"
  `);
};

module.exports = {
  getListUser,
  createUser,
  getUerById,
  deleteUser,
  updateUserByUserName,
  getUserByUserName,
  uploadAvatarUser,
  registerUser,
  searchUser,
};
