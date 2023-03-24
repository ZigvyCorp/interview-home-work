import { User } from "../models/users.js";

class UserController {
  //Create user
  async create(req, res) {
    const newUser = new User(req.body);
    try {
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Update user
  //Params:user._id
  async update(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        await user.updateOne({ $set: req.body });
        res.status(200).json("User has been update");
      } else {
        res.status(403).json("User don't exist");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Delete user
  //Params:user._id
  async delete(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("account has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Get a user
  //Params:user._id
  async display(req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export var userController = new UserController();
