import express from "express";
import blogCtrl from "../controllers/blogCtrl";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/blog", auth, blogCtrl.createBlog);

router.get("/blog", blogCtrl.getHomeBlog);

router.get("/blog/:id", blogCtrl.getBlog);

router.get("/search/blogs", blogCtrl.searchBlogs);

export default router;
