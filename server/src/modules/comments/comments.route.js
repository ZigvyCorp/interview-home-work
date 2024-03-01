import express from "express";
import controller from "./comments.controller.js";

const routes = express.Router();
const prefix = "/comments";

routes.route("").get(controller.getList);

export { prefix, routes };
