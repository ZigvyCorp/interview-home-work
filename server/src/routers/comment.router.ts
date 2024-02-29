import {
  createComment,
  getAllComments,
} from "../controllers/comment.controller";
import { Router } from "express";

export default (router: Router) => {
  router.get("/comments", getAllComments);
  router.post("/comments", createComment);
};
