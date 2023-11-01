import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
// app.use(express.json);
app.use(express.static("."));
app.listen(8080, () => console.log("Start server BE port 8080"));

app.get("/get-user", (req, res) => {
    res.send("hello");
});
