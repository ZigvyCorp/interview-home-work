const express = require("express");
const router = express.Router();

const validator = require("../middleware/validateAuth");

const userCtrl = require("../controllers/userController");

//POST api/users/register
router.post("/register", validator.validateCreateUser(), userCtrl.register);
//POST api/users/login
router.post("/login", validator.validateLogin(), userCtrl.login);


module.exports = router;
