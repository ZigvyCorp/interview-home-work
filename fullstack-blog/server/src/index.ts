import express, { Express, Request, Response } from "express";
import withConfig from "./config";
import { errorMiddleware } from "./middlewares/error";

const app: Express = express();
const PORT = process.env.PORT || 8000;

withConfig(app);

app.use("*", (req: Request, res: Response) => {
	res.status(400).send("Route not found");
});

app.use(errorMiddleware);
app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
