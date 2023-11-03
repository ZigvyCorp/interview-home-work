import express from "express";
import cors from "cors";
import rootRouter from "./Routers/rootRoutes.js";

const app = express();
app.use(cors());
// app.use(express.json);
app.use(express.static("."));
app.listen(8080, () => console.log("Start server BE port 8080"));

app.use("/api", rootRouter);
