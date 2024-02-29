const router = require("express").Router();
const userController = require("../controller/user");
const { verifyAccessToken } = require("../middlewares/verifyToken");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);


router.get("/getUserById/:uId", userController.getUserById);
router.post("/createUser", userController.createUser);

router.put("/updateUserById/:uId", userController.updateUserById);

module.exports = router;
