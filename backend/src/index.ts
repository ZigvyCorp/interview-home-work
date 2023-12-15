import express, { Express } from "express";
import cors from "cors";
import router from "src/routers";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.listen(3001, () => console.log("Listening on port 3001"));
