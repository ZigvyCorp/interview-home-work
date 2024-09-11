import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.use(cors());

// // body-parse,reading from body to req.body

app.use(express.json());

export default app;
