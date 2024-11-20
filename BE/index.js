import express from "express"
import dotenv from "dotenv"
import routes from "./src/routes/routes.js";
import cors from "cors"
dotenv.config();

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use("/api", routes)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

