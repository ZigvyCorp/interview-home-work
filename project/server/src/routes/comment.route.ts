import express from "express";
import commentController from "../controllers/comment.controller";
import auth from "../middleware/auth.middleware";

const commentRouter = express.Router();
commentRouter.post("/create",auth, commentController.createCommemt);
commentRouter.put("/edit/:id",auth, commentController.editCommemt);
commentRouter.delete("/delete/:id",auth, commentController.deleteComment);
commentRouter.get("/", commentController.getAllComment);

export default commentRouter;