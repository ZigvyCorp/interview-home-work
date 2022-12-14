import express from "express";
import PostController from "../app/controllers/Post.Controller";
const router = express.Router();

router.put("/:id", PostController.UpdateBy);
router.delete("/:id", PostController.DeleteById);
router.delete("/:id/hard-delete", PostController.HardDeleteById);
router.get("/:id", PostController.GetSingle);
router.post("/", PostController.Create);
router.get("/", PostController.GetAll);
module.exports = router;
