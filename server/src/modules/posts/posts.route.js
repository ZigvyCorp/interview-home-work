import express from "express";
import { validate } from "express-validation";
import controller from "./posts.controller.js";
import rules from "./posts.rule.js";

const routes = express.Router();
const prefix = "/posts";

routes.route("").get(validate(rules.filter), controller.getList);
routes.route("/:id(\\d+)").get(controller.detail);

export { prefix, routes };
