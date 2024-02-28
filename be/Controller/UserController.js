const User = require("../Model/User");
const { generateId } = require("../Util/helpers");

const UserController = {
  //get list
  getList: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).send({ users });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  //delete
  delete: async (req, res) => {
    try {
      const findUser = await User.findOne({ id: req.params.id });
      if (!findUser)
        return res.status(404).send({ message: "Not found user." });
      await findUser.deleteOne();
      res.status(200).send({ message: "Delete user successfully." });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  //create
  create: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        return res.status(404).send({ message: "Username is exist." });
      }
      const newUser = new User({ ...req.body, id: generateId() });
      await newUser.save();
      res.status(200).send({ message: "Create user successful." });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  edit: async (req, res) => {
    try {
      const findUser = await User.findOne({ id: req.params.id });
      if (!findUser)
        return res.status(404).send({ message: "Not found user." });
      await findUser.updateOne({
        $set: req.body,
      });

      res.status(200).send({ message: "Update user successful." });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  getById: async (req, res) => {
    try {
      const user = await User.findOne({ id: req.params.id });
      if (!user) return res.status(404).send({ message: "Not found user." });
      res.status(200).send({ user });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(404).send({ message: "Username is wrong." });
      }

      const checkPass = req.body.password === user.password;
      if (!checkPass) {
        return res.status(404).send({ message: "Password is wrong." });
      }

      const { password, ...rest } = user._doc;
      res.status(200).send({ user: rest });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = UserController;
