// routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Route đăng nhập
router.post("/login", authController.login);
// Route đăng kí
router.post("/register", authController.register);
module.exports = router;
