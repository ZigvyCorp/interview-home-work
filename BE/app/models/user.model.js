// models/UserModel.js
const users = require('../data/users.json');

class UserModel {
  static getAllUsers() {
    return users;
  }

  static getUserById(id) {
    return users.find(user => user.id === id);
  }

  static addUser(newUser) {
    users.push(newUser);
  }

  static updateUser(updatedUser) {
    const index = users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
    }
  }

  static deleteUser(id) {
    users = users.filter(user => user.id !== id);
  }
}

module.exports = UserModel;
