const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Get all users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Get single user
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

module.exports = router;
