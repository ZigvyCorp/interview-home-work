import { search } from "../controllers/posts";
import { Router } from "express";

export function searchRouter(): Router {
	const router = Router();

	router.get("/", search);

	return router;
}
