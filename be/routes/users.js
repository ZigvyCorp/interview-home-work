const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching posts");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    if (!users) {
      res.status(404).send("users not found");
      return;
    }
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching");
  }
});
module.exports = router;
