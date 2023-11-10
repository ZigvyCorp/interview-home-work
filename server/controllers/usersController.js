const argon2 = require("argon2");
const { Users } = require("../models");

const usersController = {
  //add user
  addUser: async (req, res) => {
    const { username, password, name, dob } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ success: false, message: "Missing this user!" });
    try {
      const hashedPW = await argon2.hash(password);
      const newUser = new Users({
        username,
        password: hashedPW,
        name,
        dob,
      });
      await newUser.save();

      // const findU = await Users.findOne({ username });
      // const user = {
      //   id: parseInt(findU._id.toHexString(), 16), //set id to integer
      //   username: findU.username,
      //   password: findU.password,
      //   name: findU.name,
      //   dob: findU.dob,
      // };
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error" });
    }
  },

  //get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await Users.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get user by username
  getUser: async (req, res) => {
    try {
      await Users.find({
        username: req.params.username,
      }).then((findUser) => res.status(200).json(findUser));
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = usersController;
