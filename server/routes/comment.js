const router = require("express").Router();
const cmtController = require("./../controllers/comment");
const auth = require("./../middlewares/authenToken");

module.exports = () => {
  router.post("/", auth.isAuthen, cmtController.insert);
  router.get("/post", cmtController.getByPostId);
  router.get("/", cmtController.getAll);
  
  
  return router;
};
