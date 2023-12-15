import express, { Router } from "express";
import { create, detail, paginate } from "src/controllers/post.controller";

const router: Router = express.Router();

router.get("/posts", paginate);
router.get("/posts/:id", detail);
router.post("/posts", create);

export default router;
