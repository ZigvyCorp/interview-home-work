import express from "express";
import { asyncHandler } from "../helpers/asyncHandle";
import migrationController from "../controllers/migration.controller";

const router = express.Router();
router.post("/user", asyncHandler(migrationController.migrationDataUser()));
router.post(
  "/comment",
  asyncHandler(migrationController.migrationDataComment())
);
router.post("/post", asyncHandler(migrationController.migrationDataPost()));
router.post("/data", asyncHandler(migrationController.migrationAllData()));

export default router;
