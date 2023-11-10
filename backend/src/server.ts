import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router/index";
dotenv.config();
const app: Express = express();
const PORT = 8000;

// middle
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Router
router(app);

// database
import "./configs/database";

app.listen(PORT, () => {
	console.log(`connect server ${PORT}`);
});
