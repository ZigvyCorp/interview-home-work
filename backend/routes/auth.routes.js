const express = require("express");
const { validateSignUp } = require("../middlewares/auth.middleware");
const {
  signup,
  login,
  logout,
  loggedin,
} = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signup", validateSignUp, signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/loggedin", loggedin);

module.exports = router;
