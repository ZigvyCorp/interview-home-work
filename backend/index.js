


const express = require("express");
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const port = process.env.PORT || 8000
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./src/routes/user");
const morgan= require("morgan");
const postRoute = require("./src/routes/post");
const homeRoute = require("./src/routes/home");

mongoose.connect("mongodb+srv://trungnghia19062001:112233a@cluster0.elausuk.mongodb.net/?retryWrites=true&w=majority")
.then(success => console.log("Connected to DB"))
.catch(err=> console.log(err.message));
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));
app.use("/home",homeRoute);
app.use("/v1/user", userRoute);
app.use("/v1/post",postRoute);

app.listen(port,()=>{
    console.log("sever is running");
})