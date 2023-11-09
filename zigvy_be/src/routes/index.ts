import express, { Express, Request, Response } from "express";

import { PostRouter } from "../modules/posts";

const router = express();

router.route("/").get(function (req, res) {
  res.json("Welcome");
});

router.use("/", PostRouter);

export default router;
