const User = require("../models/UserModel");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        dob: req.body.dob,
      });
      await user.save();
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({ username: username });
    if (!user) {
      res.status(404).json({ message: "Username or Password is incorrect" });
    } else {
      const isEqual = await bcrypt.compare(password, user.password);
      if (isEqual) {
        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id.toString(),
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1h",
          }
        );
        return res.status(200).json({
          message: "Auth successful",
          token: token,
        });
      } else {
        res.status(401).json({
          message: "Auth failed",
        });
      }
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
