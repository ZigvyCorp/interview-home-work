const router = require("express").Router();
const userController = require("./../controllers/user")
const auth = require("./../middlewares/authenToken");
module.exports = () => {
  router.post("/sign-in", userController.signIn);
  router.post("/sign-up", userController.signUp)
  return router;
};
