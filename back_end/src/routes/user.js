const router = require("express").Router();
const userController = require("../controllers/userController")
const middlewareController = require("../middlewares/middlewareController")

// GET ALL USER
router.get("/:userId", middlewareController.verifyTokenAndManagerAuth, userController.getAllUsers);

//DELETE USER
router.delete("/:userId",middlewareController.verifyTokenAndManagerAuth, userController.deleteUser);

//UPDATE USER
router.put("/:userId",middlewareController.verifyTokenUserAndManagerAuth, userController.updateUser);

module.exports = router