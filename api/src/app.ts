import express from "express";
import mongoose from "mongoose";
import router from "./routes";
import bodyParser from "body-parser";
const app = express();
const port = 8080;

const uri = "mongodb+srv://zigvy:zigvy@cluster0.bo58tig.mongodb.net/";

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: "50mb",
        parameterLimit: 10000,
    })
);

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

app.use(router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    connect();
    return console.log(`Express is listening at http://localhost:${port}`);
});
