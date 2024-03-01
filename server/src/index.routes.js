import express from "express";
import path from "path";
import requireContext from "require-context";
import { fileURLToPath } from "url";
import logger from "./common/logger/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

try {
  const allRoutes = requireContext(path.join(__dirname, "./modules"), true, /\.route\.js$/);
  allRoutes.keys().forEach(async (route) => {
    const curRoute = await import("./modules/" + route);
    logger.info(`App mount route ${curRoute.prefix}`);
    if (!curRoute.prefix) {
      throw new Error(`Prefix is missing `, curRoute);
    }
    router.use(curRoute.prefix, curRoute.routes);
  });
} catch (error) {
  console.error("mount route error => ", error);
}

export default router;
