import express, { Express, Request, Response } from "express";
import withConfig from "./config";

const app: Express = express();
const PORT = process.env.PORT || 8000;

withConfig(app);

app.use("*", (req: Request, res: Response) => {
	res.status(400).send("Route not found");
});

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
