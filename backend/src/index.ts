import express, { Express } from "express";
import { commentsHandler, postsHandler, usersHandler } from "./routes";
import cors from 'cors'
const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/', postsHandler)
app.use('/', usersHandler)
app.use('/', commentsHandler)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});