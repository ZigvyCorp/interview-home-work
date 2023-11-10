import express from "express";
const app = express();
app.use(express.json()); 

import cors from "cors";
import rootRouter from "./src/routers/rootRouter.js";
app.use(cors());
app.listen(8080);

app.use(rootRouter)
