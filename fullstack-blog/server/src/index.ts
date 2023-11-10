import express, { Express, Request, Response } from "express";
import withConfig from "./config";
import { errorMiddleware } from "./middlewares/error";
import withRoute from "./routes";

const app: Express = express();
const PORT = process.env.PORT || 8000;

withConfig(app);
withRoute(app);

app.use("*", (req: Request, res: Response) => {
	res.status(400).send("Route not found");
});

app.use(errorMiddleware);
app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
