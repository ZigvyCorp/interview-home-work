import expressApp from "express";
import init from "./src/app/index.js";

const app = init(expressApp());

export default app;
