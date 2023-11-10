import express from "express"
import dotenv from "dotenv"
import routes from "./src/routes/routes.js";

dotenv.config();

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use("/api", routes)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

