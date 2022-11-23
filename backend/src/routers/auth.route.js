const express = require("express");
const validate = require("../middlewares/validate");
const authValidations = require("../validations/auth.validation");
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Hello World Server");
});

router.post("/register", validate(authValidations.register), authController.register);
router.post("/login", validate(authValidations.login), authController.login);

module.exports = router;
