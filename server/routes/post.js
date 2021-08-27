const router = require("express").Router();
const postController = require("./../controllers/post");
const auth = require("./../middlewares/authenToken");

module.exports = () => {
    router.post("/", auth.isAuthen, postController.insert)
    
    router.get("/Id", postController.getPostById)
    router.get("/key", postController.getPostByKey)
    router.get("/", postController.getAllPost);
    router.put("/", auth.isAuthen, postController.updateById)
    router.delete("/", auth.isAuthen, postController.deleteById)
    return router
}