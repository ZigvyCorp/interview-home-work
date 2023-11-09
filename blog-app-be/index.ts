import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser = require("body-parser");
import initMongoDB from "./src/config/mongodb";
import cors from "cors";
import initRouters from "./src/routes";

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(cors());

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

initMongoDB()
	.then(() => {
		console.log("⚡[Server]: Connect to database success");

		initRouters(app);

		app.listen(port, () => {
			console.log(`⚡[Server]: Server is running at http://localhost:${port}`);
		});
	})
	.catch((error) => {
		console.log("⚠️[Server]: Cannot connect to database ");
		console.log(error);
	});
