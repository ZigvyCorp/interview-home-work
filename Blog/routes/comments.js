import { Router } from "express";
import { commentController } from "../controllers/CommentController.js";
export const commentRouter = Router();

//Create comment
//[POST]
commentRouter.post("", commentController.create);

//Update comment
//[PUT]
//Params:@comment._id
commentRouter.put("/:id", commentController.update);

//Delete comment
//[DELETE]
//Params:@comment._id
commentRouter.delete("/:id", commentController.delete);
