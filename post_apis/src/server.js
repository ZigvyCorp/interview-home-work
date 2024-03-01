import express from "express";
import cors from "cors";
import rootRoute from "./routes/rootRoutes.js";
import dotenv from "dotenv";
import { connection } from "./config/connection.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(rootRoute);

(async () => {
  try {
    await connection();
    app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    throw new Error(error);
  }
})();
