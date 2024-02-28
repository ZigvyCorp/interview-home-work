const router = require("express").Router();
const userController = require("../controller/user");

router.get("/getUserById/:uId", userController.getUserById);
router.post("/createUser", userController.createUser);

router.put("/updateUserById/:uId", userController.updateUserById);

module.exports = router;
