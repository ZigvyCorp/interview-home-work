const { db, dbErrors } = require("../../data");
const { User } = db.models;

class UserService {
  getUsers() {
    return User;
  }

  getUser(id) {
    const user = User.find((user) => user.id === id);
    if (!user) {
      throw new dbErrors.NotFound(`GET - user ${id} not found`);
    }
    return user;
  }

  createUser(fieldToCreate) {
    const lastId = User[User.length - 1].id;
    const { username, password, name, dob } = fieldToCreate;
    const newUser = {
      id: lastId + 1,
      username,
      password,
      name: name || "",
      dob: dob || "",
      created_at: Date.now(),
    };
    User.push(newUser);
    writeFileSync("src/data/users.json", JSON.stringify(User));
    return newUser;
  }

  updateProfile(id, fieldToUpdate) {
    const user = User.find((user) => user.id === id);
    if (!user) {
      throw new dbErrors.NotFound(`GET - user ${id} not found`);
    }

    Object.assign(user, fieldToUpdate);
    writeFileSync("src/data/users.json", JSON.stringify(User));
  }

  deleteUser(id) {
    const user = User.find((user) => user.id === id);
    if (!user) {
      throw new dbErrors.NotFound(`GET - user ${id} not found`);
    }

    const result = User.filter((user) => user.id !== id);
    writeFileSync("src/data/users.json", JSON.stringify(result));
  }
}

module.exports = new UserService();
