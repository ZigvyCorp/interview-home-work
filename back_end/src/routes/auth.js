const router = require("express").Router();
const authController = require("../controllers/authController");

//REGISTER

router.post("/register", authController.register);

//LOGIN
router.post("/login", authController.login);

//REFRESH TOKEN
router.post("/refresh", authController.RequestRefreshToken);

//LOGOUT
router.post("/logout", authController.logout);

module.exports = router;
