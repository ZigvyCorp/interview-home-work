const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.model");

router.route("/").get((req, res) => {
  UserModel.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
