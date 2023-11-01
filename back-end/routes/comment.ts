import express from "express";
import commentController from "../controllers/comment";

const commentRouter = express.Router();

commentRouter.get("/", commentController.getComments);
commentRouter.get("/:id", commentController.getComment);
commentRouter.post("/create", commentController.createComment);
commentRouter.patch("/update/:id", commentController.updateComment);
commentRouter.delete("/delete/:id", commentController.deleteComment);

export default commentRouter;
