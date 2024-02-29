import "dotenv/config";
import "express-async-errors";

// express
import express from "express";
const app = express();

// routes
import route from "./routes/index.js";

import morgan from "morgan";
import cors from "cors";

app.use(cors());
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api", route);

export default app;
