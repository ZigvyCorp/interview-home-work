import cors from "cors";
import "dotenv/config";
import express, { Express } from "express";
import morgan from "morgan";
import connectDB from "../database/db";

const withConfig = (app: Express) => {
	connectDB();
	app.use(express.static("public"));
	app.use(cors());
	app.use(morgan("dev"));
	app.use(express.json({ limit: "1000" }));
	app.use(express.urlencoded({ extended: true }));
};
export default withConfig;
